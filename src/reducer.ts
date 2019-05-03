import { Action, ActionTypes } from './actions';
import { initialBoard, INTERVAL, BOARD_SIZE } from './config';

export function generateEmptyBoard(boardSize: number): boolean[][] {
  return new Array(boardSize).fill(new Array(boardSize).fill(false));
}

export function getIndexesToTry(
  currentIndex: number,
  currentRow: boolean[],
): number[] {
  return [currentIndex - 1, currentIndex, currentIndex + 1].filter(
    el => el >= 0 && el < currentRow.length,
  );
}

export function getNewCellState(
  currentElementIndex: number,
  rowAbove: any,
  currentRow: boolean[],
  rowUnder: any,
): boolean {
  const indexesToTry = getIndexesToTry(currentElementIndex, currentRow);

  const liveCellsAround = [currentRow, rowAbove, rowUnder]
    .filter(Boolean)
    .reduce((acc, row) => {
      const liveCellsInRow = indexesToTry.map(el => row[el]).filter(Boolean)
        .length;
      return acc + liveCellsInRow;
    }, 0);

  const currentState = currentRow[currentElementIndex];
  if (currentState) {
    return liveCellsAround === 3 || liveCellsAround === 4;
  }
  return liveCellsAround === 3;
}

export enum GameStatus {
  EDIT = 'edit',
  PAUSED = 'paused',
  RUNNING = 'running',
}

export interface GameConfig {
  boardSize: number;
  gameState: GameStatus;
  interval: number;
}

export interface State {
  boardState: boolean[][];
  config: GameConfig;
  round: number;
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.TICK: {
      const { boardState, round } = state;
      const updatedBoardState = boardState.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          const rowAbove = boardState[rowIndex - 1];
          const rowUnder = boardState[rowIndex + 1];
          return getNewCellState(cellIndex, rowAbove, row, rowUnder);
        }),
      );
      return {
        ...state,
        boardState: updatedBoardState,
        round: round + 1,
      };
    }

    case ActionTypes.CONFIGURATION_UPDATE: {
      const interval = action.newInterval || INTERVAL;

      const boardSize = action.newBoardSize || BOARD_SIZE;
      const hasBoardSizeChanged = state.config.boardSize !== boardSize;

      if (hasBoardSizeChanged) {
        const boardState = generateEmptyBoard(boardSize);
        return {
          ...state,
          boardState,
          config: { ...state.config, interval, boardSize },
        };
      }

      return {
        ...state,
        config: { ...state.config, interval },
      };
    }

    case ActionTypes.START_GAME:
      return {
        ...state,
        config: { ...state.config, gameState: GameStatus.RUNNING },
      };

    case ActionTypes.STOP_GAME:
      return {
        ...state,
        config: { ...state.config, gameState: GameStatus.PAUSED },
      };

    case ActionTypes.RESET_GAME:
      return {
        ...state,
        boardState: initialBoard,
        round: 0,
      };

    case ActionTypes.EDIT_GAME:
      return {
        ...state,
        config: { ...state.config, gameState: GameStatus.EDIT },
      };

    case ActionTypes.EDIT_CELL: {
      const { boardState } = state;
      const { cellCoordinate } = action;
      if (!cellCoordinate) {
        return state;
      }
      return {
        ...state,
        boardState: boardState.map((row, index) => {
          if (index === cellCoordinate.rowIndex) {
            return row.map((cellState, cellIndex) => {
              if (cellCoordinate.cellIndex === cellIndex) {
                return !cellState;
              }
              return cellState;
            });
          }
          return row;
        }),
      };
    }

    default:
      return state;
  }
}

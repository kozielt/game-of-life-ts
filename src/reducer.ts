import { Action, ActionTypes } from './actions';
import { initialBoardState } from './config';

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

interface Config {
  interval: number;
  isRunning: boolean;
  boardSize: number;
}

interface State {
  boardState: boolean[][];
  config: Config;
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.TICK: {
      const { boardState } = state;
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
      };
    }

    case ActionTypes.INTERVAL_CHANGE: {
      const interval = action.newInterval || 3000;
      return {
        ...state,
        config: { ...state.config, interval },
      };
    }

    case ActionTypes.START_GAME:
      return {
        ...state,
        config: { ...state.config, isRunning: true },
      };

    case ActionTypes.STOP_GAME:
      return {
        ...state,
        config: { ...state.config, isRunning: false },
      };

    case ActionTypes.RESET_GAME:
      return {
        ...state,
        boardState: initialBoardState,
      };

    default:
      return state;
  }
}

export enum ActionTypes {
  TICK = 'tick',
  CONFIGURATION_UPDATE = 'configuration_update',
  START_GAME = 'start_game',
  STOP_GAME = 'stop_game',
  RESET_GAME = 'reset_game',
  EDIT_GAME = 'edit_game',
  EDIT_CELL = 'edit_cell',
}

export interface CellCoordinate {
  rowIndex: number;
  cellIndex: number;
}

export interface Action {
  type: ActionTypes;
  newInterval?: number;
  newBoardSize?: number;
  cellCoordinate?: CellCoordinate;
}

export const updateConfiguration = (
  newInterval: number,
  newBoardSize: number,
): Action => ({
  type: ActionTypes.CONFIGURATION_UPDATE,
  newInterval,
  newBoardSize,
});

export const tick = (): Action => ({ type: ActionTypes.TICK });

export const startGame = (): Action => ({ type: ActionTypes.START_GAME });

export const stopGame = (): Action => ({ type: ActionTypes.STOP_GAME });

export const resetGame = (): Action => ({ type: ActionTypes.RESET_GAME });

export const editGame = (): Action => ({ type: ActionTypes.EDIT_GAME });

export const changeCellStatus = (cellCoordinate: CellCoordinate): Action => ({
  type: ActionTypes.EDIT_CELL,
  cellCoordinate,
});

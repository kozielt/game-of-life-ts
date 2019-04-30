export enum ActionTypes {
  TICK = 'tick',
  INTERVAL_CHANGE = 'change_interval',
  START_GAME = 'start_game',
  STOP_GAME = 'stop_game',
}

export interface Action {
  type: ActionTypes;
  newInterval?: number;
}

export const changeInterval = (newInterval: number): Action => ({
  type: ActionTypes.INTERVAL_CHANGE,
  newInterval,
});

export const startGame = (): Action => ({ type: ActionTypes.START_GAME });

export const stopGame = (): Action => ({ type: ActionTypes.STOP_GAME });

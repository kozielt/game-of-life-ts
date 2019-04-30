import React, { useReducer, useEffect } from 'react';
import { css } from 'emotion';
import Board from './board';
import Management from './mgmt';
import { reducer } from './reducer';
import { ActionTypes } from './actions';
import { initialBoardState } from './config';

const appClassName = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
`;

const initialState = {
  boardState: initialBoardState,
  config: {
    interval: 3000,
    isRunning: true,
    boardSize: 8,
  },
};

export const StateContext = React.createContext({
  dispatch: Function.prototype,
  state: initialState,
});

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    boardState,
    config: { interval, isRunning },
  } = state;

  useEffect(() => {
    const cleanupTimer = setInterval(
      () => {
        if (isRunning) {
          dispatch({ type: ActionTypes.TICK });
        }
      },
      interval,
    );
    return () => clearInterval(cleanupTimer);
  }, [isRunning, interval]);

  return (
    <StateContext.Provider value={{ dispatch, state }}>
      <div className={appClassName}>
        <Management />
        <Board boardState={boardState} />
      </div>
    </StateContext.Provider>
  );
};

export default App;

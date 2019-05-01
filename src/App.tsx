import React, { useReducer, useEffect } from 'react';
import { css } from 'emotion';
import { GameArea, Management } from './sections';
import { reducer } from './reducer';
import { tick } from './actions';
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

export const DispatchContext = React.createContext(Function.prototype);

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    boardState,
    config: { interval, isRunning },
  } = state;

  useEffect(() => {
    const cleanupTimer = setInterval(() => {
      if (isRunning) {
        dispatch(tick());
      }
    }, interval);
    return () => clearInterval(cleanupTimer);
  }, [isRunning, interval]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <div className={appClassName}>
        <Management isRunning={isRunning} />
        <GameArea isRunning={isRunning} boardState={boardState} />
      </div>
    </DispatchContext.Provider>
  );
};

export default App;

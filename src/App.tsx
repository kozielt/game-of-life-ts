import React, { useReducer, useEffect } from 'react';
import { css } from 'emotion';
import { Board } from './components';
import { ActionTypes, Action, reducer } from './reducer';
import { initialState } from './config';

const appClassName = css`
  background-color: #282c34;
  min-height: 100vh;
`;

const App: React.FC = () => {
  const [state, dispatch]: [boolean[][], (action: Action) => void] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    const cleanupTimer = setInterval(
      () => dispatch({ type: ActionTypes.TICK }),
      3000,
    );
    return () => clearInterval(cleanupTimer);
  }, []);

  return (
    <div className={appClassName}>
      <Board boardState={state} />
    </div>
  );
};

export default App;

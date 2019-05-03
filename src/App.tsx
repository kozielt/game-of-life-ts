import React, { useEffect, useReducer, useState } from 'react';
import { css } from 'emotion';
import { GameArea, Management } from './sections';
import { GameStatus, reducer } from './reducer';
import { tick } from './actions';
import { initialBoardState } from './config';

const appClassName = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
`;

const initialState = {
  boardState: initialBoardState,
  round: 0,
  config: {
    interval: 3000,
    gameState: GameStatus.PAUSED,
    boardSize: 8,
  },
};

export const DispatchContext = React.createContext(Function.prototype);

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSidePanelVisible, setSidePanelVisible] = useState(true);
  const { boardState, round, config } = state;
  const { interval, gameState } = config;

  useEffect(() => {
    const cleanupTimer = setInterval(() => {
      if (gameState === GameStatus.RUNNING) {
        dispatch(tick());
      }
    }, interval);
    return () => clearInterval(cleanupTimer);
  }, [gameState, interval]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <div className={appClassName}>
        <Management gameState={gameState} isVisible={isSidePanelVisible} />
        <GameArea
          boardState={boardState}
          gameConfig={config}
          round={round}
          isSidePanelVisible={isSidePanelVisible}
          switchSidePanel={() => setSidePanelVisible(!isSidePanelVisible)}
        />
      </div>
    </DispatchContext.Provider>
  );
};

export default App;

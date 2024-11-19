import React, { useEffect, useReducer, useState, useMemo } from 'react';
import { css } from 'emotion';
import { GameArea, Management } from './sections';
import { GameStatus, reducer, State } from './reducer';
import { tick } from './actions';
import { initialBoard, BOARD_SIZE, INTERVAL } from './config';
import { RrWebClient } from './MutinyHacks';

const appClassName = css`
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`;

const initialState: State = {
  boardState: initialBoard,
  round: 0,
  config: {
    interval: INTERVAL,
    gameState: GameStatus.PAUSED,
    boardSize: BOARD_SIZE,
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

  useMemo(() => {
    const client = new RrWebClient();
    client.record()
  }, []);

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

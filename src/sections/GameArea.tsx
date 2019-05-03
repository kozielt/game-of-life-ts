import React from 'react';
import { css } from 'emotion';
import Board from './board';
import Status from './status';
import SidePanelSwitcher from './SidePanelSwitcher';
import { GameStatus, GameConfig } from '../reducer';

const gameAreaCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 3;
`;

interface IGameArea {
  boardState: boolean[][];
  gameConfig: GameConfig;
  isSidePanelVisible: boolean;
  round: number;
  switchSidePanel: () => void;
}

const GameArea: React.FC<IGameArea> = ({
  boardState,
  gameConfig,
  isSidePanelVisible,
  round,
  switchSidePanel,
}): JSX.Element => {
  return (
    <div className={gameAreaCss}>
      <Status gameConfig={gameConfig} round={round}/>
      <Board
        boardState={boardState}
        isEdit={GameStatus.EDIT === gameConfig.gameState}
      />
      <SidePanelSwitcher
        isSidePanelVisible={isSidePanelVisible}
        switchSidePanel={switchSidePanel}
      />
    </div>
  );
};

export default GameArea;

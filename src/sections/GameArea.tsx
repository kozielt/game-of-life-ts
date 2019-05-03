import React from 'react';
import { css } from 'emotion';
import Board from './board';
import Status from './status';
import { GameStatus, GameConfig } from '../reducer';

const gameAreaCss = css`
  display: flex;
  flex-direction: column;
  flex-grow: 3;

  @media only screen and (min-width: 1100px) {
    flex-grow: 4;
  }
`;

interface IGameArea {
  boardState: boolean[][];
  gameConfig: GameConfig;
}

const GameArea: React.FC<IGameArea> = ({ boardState, gameConfig }): JSX.Element => {
  return (
    <div className={gameAreaCss}>
      <Status gameConfig={gameConfig} />
      <Board boardState={boardState} isEdit={GameStatus.EDIT === gameConfig.gameState} />
    </div>
  );
};

export default GameArea;

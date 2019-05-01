import React from 'react';
import { css } from 'emotion';
import Board from './board';
import Status from './status';
import { GameStatus } from '../reducer';

const gameAreaCss = css`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
`;

interface IGameArea {
  gameState: GameStatus;
  boardState: boolean[][];
}

const GameArea: React.FC<IGameArea> = ({
  gameState,
  boardState,
}: IGameArea): JSX.Element => {
  return (
    <div className={gameAreaCss}>
      <Status gameStatus={gameState} />
      <Board boardState={boardState} isEdit={GameStatus.EDIT === gameState} />
    </div>
  );
};

export default GameArea;
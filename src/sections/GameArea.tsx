import React from 'react';
import { css } from 'emotion';
import Board from './board';
import Status from './status';

const gameAreaCss = css`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
`;

interface IGameArea {
  isRunning: boolean;
  boardState: boolean[][];
}

const GameArea: React.FC<IGameArea> = ({
  isRunning,
  boardState,
}: IGameArea): JSX.Element => {
  return (
    <div className={gameAreaCss}>
      <Status isRunning={isRunning} />
      <Board boardState={boardState} />
    </div>
  );
};

export default GameArea;

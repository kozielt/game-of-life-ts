import React from 'react';
import { css } from 'emotion';
import { THEME } from '../../config';
import { GameStatus, GameConfig } from '../../reducer';
import { Text } from '../../shared';

const statusCss = css`
  width: 100%;
  text-align: center;
  color: ${THEME.DEFAULT_FONT_COLOR};
`;

const runningColor = css`
  color: lime;
`;

const notActiveColor = css`
  color: orange;
`;

const boardSizeCss = css`
  display: inline-block;
  margin-right: 10px;
`;

interface IStatus {
  gameConfig: GameConfig;
}

const Status: React.FC<IStatus> = ({ gameConfig }): JSX.Element => {
  const { gameState, interval, boardSize } = gameConfig;
  return (
    <div className={statusCss}>
      <h1>
        Game Status:{' '}
        {gameState === GameStatus.RUNNING && (
          <span className={runningColor}>Running</span>
        )}
        {gameState === GameStatus.PAUSED && (
          <span className={notActiveColor}>Paused</span>
        )}
        {gameState === GameStatus.EDIT && (
          <span className={notActiveColor}>Edit</span>
        )}
      </h1>
      <Text className={boardSizeCss}>Board Size: {boardSize}</Text>
      <Text>Interval: {interval} ms</Text>
    </div>
  );
};

export default Status;

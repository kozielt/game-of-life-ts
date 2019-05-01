import React from 'react';
import { css } from 'emotion';
import { THEME } from '../../config';
import { GameStatus } from '../../reducer';

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

interface IStatus {
  gameStatus: GameStatus;
}

const Status: React.FC<IStatus> = ({ gameStatus }: IStatus): JSX.Element => {
  return (
    <div className={statusCss}>
      <h1>
        Game Status:{' '}
        {gameStatus === GameStatus.RUNNING && (
          <span className={runningColor}>Running</span>
        )}
        {gameStatus === GameStatus.PAUSED && (
          <span className={notActiveColor}>Paused</span>
        )}
        {gameStatus === GameStatus.EDIT && (
          <span className={notActiveColor}>Edit</span>
        )}
      </h1>
    </div>
  );
};

export default Status;

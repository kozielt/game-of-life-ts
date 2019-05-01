import React from 'react';
import { css } from 'emotion';

const statusCss = css`
  width: 100%;
  text-align: center;
  color: lightgray;
`;

const runningColor = css`
  color: lime;
`;

const pausedColor = css`
  color: orange;
`;

interface IStatus {
  isRunning: boolean;
}

const Status: React.FC<IStatus> = ({ isRunning }: IStatus): JSX.Element => {
  return (
    <div className={statusCss}>
      <h1>
        Game Status:{' '}
        {isRunning ? (
          <span className={runningColor}>Running</span>
        ) : (
          <span className={pausedColor}>Paused</span>
        )}
      </h1>
    </div>
  );
};

export default Status;

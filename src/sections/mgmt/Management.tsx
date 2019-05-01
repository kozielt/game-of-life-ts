import React, { useState } from 'react';
import { css } from 'emotion';
import { GAME_LIMITS, THEME } from '../../config';
import Header from './Header';
import Buttons from './Buttons';

// todo modify flex grow via query
const mgmtClass = css`
  flex-grow: 1;
  height: 100vh;
  background-color: #363a42;
`;

const rowClass = css`
  display: flex;
  margin: 0 20px 20px 20px;
  align-items: center;
`;

const labelCss = css`
  flex-grow: 1;
  color: ${THEME.DEFAULT_FONT_COLOR};
  font-size: ${THEME.FONT_SIZE};
`;

const inputCss = css`
  width: 70px;
  padding: 6px 10px;
  border-radius: 10px;
  font-size: ${THEME.FONT_SIZE};
`;

interface IManagement {
  isRunning: boolean;
}

const Management: React.FC<IManagement> = ({
  isRunning,
}: IManagement): JSX.Element => {
  const [boardSize, setBoardSize] = useState(0);
  const [interval, setInterval] = useState(3000);
  return (
    <div className={mgmtClass}>
      <Header />
      <div className={rowClass}>
        <label htmlFor="boardSize" className={labelCss}>
          Board Size
        </label>
        <input
          className={inputCss}
          id="boardSize"
          type="number"
          min={GAME_LIMITS.MIN_SIZE}
          max={GAME_LIMITS.MAX_SIZE}
          value={boardSize}
          onChange={e => setBoardSize(Number(e.target.value))}
        />
      </div>
      <div className={rowClass}>
        <label htmlFor="interval" className={labelCss}>
          Interval
        </label>
        <input
          className={inputCss}
          id="interval"
          type="number"
          style={{ width: 70 }}
          min={GAME_LIMITS.MIN_INTERVAL}
          max={GAME_LIMITS.MAX_INTERVAL}
          value={interval}
          onChange={e => setInterval(Number(e.target.value))}
        />
      </div>
      <Buttons
        isRunning={isRunning}
        interval={interval}
        resetLocalState={() => {
          setBoardSize(0);
          setInterval(3000);
        }}
      />
    </div>
  );
};

export default Management;

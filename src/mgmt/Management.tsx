import React, { useState } from 'react';
import { css } from 'emotion';
import { GAME_LIMITS } from '../config';
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
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

const Management: React.FC = (): JSX.Element => {
  const [boardSize, setBoardSize] = useState('');
  const [interval, setInterval] = useState(3000);
  return (
    <div className={mgmtClass}>
      <Header />
      <div className={rowClass}>
        <label htmlFor="boardSize">Board Size</label>
        <input
          id="boardSize"
          type="number"
          style={{ width: 50 }}
          min={GAME_LIMITS.MIN_SIZE}
          max={GAME_LIMITS.MAX_SIZE}
          value={boardSize}
          onChange={e => setBoardSize(e.target.value)}
        />
      </div>
      <div className={rowClass}>
        <label htmlFor="interval">Interval</label>
        <input
          id="interval"
          type="number"
          style={{ width: 50 }}
          min={GAME_LIMITS.MIN_INTERVAL}
          max={GAME_LIMITS.MAX_INTERVAL}
          value={interval}
          onChange={e => setInterval(Number(e.target.value))}
        />
      </div>
      <Buttons
        interval={interval}
        resetLocalState={() => {
          setBoardSize('');
          setInterval(3000);
        }}
      />
    </div>
  );
};

export default Management;

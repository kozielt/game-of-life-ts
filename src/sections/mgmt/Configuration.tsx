import React, { useContext, useState } from 'react';
import { css } from 'emotion';
import { GAME_LIMITS, THEME } from '../../config';
import { updateConfiguration } from '../../actions';
import { DispatchContext } from '../../App';
import Button from './Button';
import Header from './Header';

const rowCss = css`
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

const buttonWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const isSaveDisabled = (boardSize: number, interval: number): boolean => {
  if (boardSize > GAME_LIMITS.MAX_SIZE || boardSize < GAME_LIMITS.MIN_SIZE) {
    return true;
  }
  return (
    interval > GAME_LIMITS.MAX_INTERVAL || interval < GAME_LIMITS.MIN_INTERVAL
  );
};

const Configuration: React.FC = () => {
  const [boardSize, setBoardSize] = useState(8);
  const [interval, setInterval] = useState(3000);
  const dispatch = useContext(DispatchContext);
  return (
    <>
      <Header />
      <div>
        <div className={rowCss}>
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
        <div className={rowCss}>
          <label htmlFor="interval" className={labelCss}>
            Interval
          </label>
          <input
            className={inputCss}
            id="interval"
            type="number"
            min={GAME_LIMITS.MIN_INTERVAL}
            max={GAME_LIMITS.MAX_INTERVAL}
            value={interval}
            onChange={e => setInterval(Number(e.target.value))}
          />
        </div>
        <div className={buttonWrapper}>
          <Button
            disabled={isSaveDisabled(boardSize, interval)}
            onClick={() => {
              dispatch(updateConfiguration(interval, boardSize));
              setBoardSize(0);
              setInterval(3000);
            }}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
};

export default Configuration;

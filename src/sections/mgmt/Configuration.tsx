import React, { useContext, useState } from 'react';
import { css } from 'emotion';
import { GAME_LIMITS, THEME, BOARD_SIZE, INTERVAL } from '../../config';
import { updateConfiguration } from '../../actions';
import { DispatchContext } from '../../App';
import { Text } from '../../shared';
import Button from '../../shared/Button';
import Header from './Header';

const rowCss = css`
  display: flex;
  margin: 0 20px 20px 20px;
  align-items: center;
`;

const labelCss = css`
  flex-grow: 1;
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
  const [boardSize, setBoardSize] = useState(BOARD_SIZE);
  const [interval, setInterval] = useState(INTERVAL);
  const dispatch = useContext(DispatchContext);
  return (
    <>
      <Header />
      <div>
        <div className={rowCss}>
          <label htmlFor="boardSize" className={labelCss}>
            <Text>Board Size</Text>
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
            <Text>Interval</Text>
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
              setBoardSize(BOARD_SIZE);
              setInterval(INTERVAL);
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

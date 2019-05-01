import React, { useContext } from 'react';
import { css } from 'emotion';
import { changeInterval, resetGame, startGame, stopGame } from '../../actions';
import { DispatchContext } from '../../App';
import Button from './Button';

const buttonsCss = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > button {
    margin-bottom: 10px;
  }
`;

interface IButtons {
  isRunning: boolean;
  interval: number;
  resetLocalState: () => void;
}

const Buttons: React.FC<IButtons> = ({
  isRunning,
  interval,
  resetLocalState,
}: IButtons): JSX.Element => {
  const dispatch = useContext(DispatchContext);
  return (
    <div className={buttonsCss}>
      <Button
        onClick={() => {
          dispatch(changeInterval(interval));
          resetLocalState();
        }}
      >
        Save Changes
      </Button>
      {isRunning ? (
        <Button onClick={() => dispatch(stopGame())}>Pause Game</Button>
      ) : (
        <Button onClick={() => dispatch(startGame())}>Start Game</Button>
      )}
      <Button onClick={() => dispatch(resetGame())}>Reset Game</Button>
    </div>
  );
};

export default Buttons;

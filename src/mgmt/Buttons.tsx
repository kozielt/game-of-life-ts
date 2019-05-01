import React, { useContext } from 'react';
import { changeInterval, resetGame, startGame, stopGame } from '../actions';
import { DispatchContext } from '../App';

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
    <>
      <button
        onClick={() => {
          dispatch(changeInterval(interval));
          resetLocalState();
        }}
      >
        Save Changes
      </button>
      {isRunning ? (
        <button onClick={() => dispatch(stopGame())}>Pause Game</button>
      ) : (
        <button onClick={() => dispatch(startGame())}>Start Game</button>
      )}
      <button onClick={() => dispatch(resetGame())}>Reset Game</button>
    </>
  );
};

export default Buttons;

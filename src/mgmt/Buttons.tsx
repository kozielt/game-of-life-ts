import React, { useContext } from 'react';
import { changeInterval, startGame, stopGame } from '../actions';
import { StateContext } from '../App';

interface IButtons {
  interval: number;
  resetLocalState: () => void;
}

const Buttons: React.FC<IButtons> = ({
  interval,
  resetLocalState,
}: IButtons): JSX.Element => {
  const { state, dispatch } = useContext(StateContext);
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
      {state.config.isRunning ? (
        <button onClick={() => dispatch(stopGame())}>Pause Game</button>
      ) : (
        <button onClick={() => dispatch(startGame())}>Start Game</button>
      )}
    </>
  );
};

export default Buttons;

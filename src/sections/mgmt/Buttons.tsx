import React, { useContext } from 'react';
import { css } from 'emotion';
import {
  changeInterval,
  resetGame,
  startGame,
  stopGame,
  editGame,
} from '../../actions';
import { DispatchContext } from '../../App';
import Button from './Button';
import { GameStatus } from '../../reducer';

const buttonsCss = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > button {
    margin-bottom: 10px;
  }
`;

interface IButtons {
  gameState: GameStatus;
  interval: number;
  resetLocalState: () => void;
}

const Buttons: React.FC<IButtons> = ({
  gameState,
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
      {gameState === GameStatus.RUNNING && (
        <Button onClick={() => dispatch(stopGame())}>Pause Game</Button>
      )}
      {gameState !== GameStatus.RUNNING && (
        <Button onClick={() => dispatch(startGame())}>Start Game</Button>
      )}
      {gameState !== GameStatus.EDIT && (
        <Button onClick={() => dispatch(editGame())}>Edit Game</Button>
      )}
      <Button onClick={() => dispatch(resetGame())}>Reset Game</Button>
    </div>
  );
};

export default Buttons;
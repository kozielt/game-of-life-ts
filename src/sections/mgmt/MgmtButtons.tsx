import React, { useContext } from 'react';
import { css } from 'emotion';
import { resetGame, startGame, stopGame, editGame } from '../../actions';
import { DispatchContext } from '../../App';
import Button from './Button';
import { GameStatus } from '../../reducer';

const buttonsCss = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;

  & > * {
    margin-bottom: 10px;
  }
`;

const bottomButtonsCss = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > button {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 1100px) {
    flex-direction: row;
    align-items: flex-end;

    & > button {
      max-height: 36px;
    
      :not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`;

interface IButtons {
  gameState: GameStatus;
}

const MgmtButtons: React.FC<IButtons> = ({ gameState }): JSX.Element => {
  const dispatch = useContext(DispatchContext);
  return (
    <div className={buttonsCss}>
      <div className={bottomButtonsCss}>
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
    </div>
  );
};

export default MgmtButtons;

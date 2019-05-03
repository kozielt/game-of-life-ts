import React from 'react';
import { css } from 'emotion';
import { GameStatus } from '../../reducer';
import Configuration from './Configuration';
import MgmtButtons from './MgmtButtons';

// todo modify flex grow via query
const managementCss = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #363a42;
`;

interface IManagement {
  gameState: GameStatus;
}

const Management: React.FC<IManagement> = ({ gameState }): JSX.Element => {
  return (
    <div className={managementCss}>
      <Configuration />
      <MgmtButtons gameState={gameState} />
    </div>
  );
};

export default Management;

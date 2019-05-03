import React from 'react';
import { css, cx } from 'emotion';
import { GameStatus } from '../../reducer';
import Configuration from './Configuration';
import MgmtButtons from './MgmtButtons';

const managementCss = css`
  height: 100vh;
  width: 400px;
  background-color: #363a42;
  transition: width 1s, margin 1s ease-in-out;
  
  display: flex;
  flex-direction: column;
  
  @media only screen and (max-width: 1200px) {
    width: 300px;
  }
`;

const hiddenCss = css`
  margin-left: -400px;
  
  @media only screen and (max-width: 1200px) {
    margin-left: -300px;
  }
`;

interface IManagement {
  gameState: GameStatus;
  isVisible: boolean;
}

const Management: React.FC<IManagement> = ({
  gameState,
  isVisible,
}): JSX.Element => {
  return (
    <div className={cx(managementCss, { [hiddenCss]: !isVisible })}>
      <Configuration />
      <MgmtButtons gameState={gameState} />
    </div>
  );
};

export default Management;

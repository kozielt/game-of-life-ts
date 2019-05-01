import React from 'react';
import { css } from 'emotion';

const containerCss = css`
  display: flex;
  justify-content: center;
`;

const Header: React.FC = (): JSX.Element => (
  <div className={containerCss}>
    <h2>Configuration</h2>
  </div>
);

export default Header;

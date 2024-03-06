import React from 'react';
import { css } from 'emotion';
import { THEME } from '../../config';

const containerCss = css`
  width: 100%;
  text-align: center;
  color: ${THEME.DEFAULT_FONT_COLOR};
`;

const Header: React.FC = () => (
  <div className={containerCss}>
    <h1>Configuration Prod Script</h1>
  </div>
);

export default Header;

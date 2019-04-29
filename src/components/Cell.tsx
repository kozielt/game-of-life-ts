import React from 'react';
import { css, cx } from 'emotion';
import { THEME } from '../config';

const cellClassName = css`
  width: 50px;
  height: 50px;
`;

const activeClassName = css`
  background-color: ${THEME.ACTIVE_COLOR};
`;

const notActiveClassName = css`
  background-color: ${THEME.DISABLE_COLOR};
`;

interface CellProps {
  isActive: boolean;
}

const Cell: React.FC<CellProps> = ({ isActive }: CellProps): JSX.Element => {
  return (
    <div
      className={cx(
        cellClassName,
        isActive ? activeClassName : notActiveClassName,
      )}
    >
      {isActive ? 'active' : 'not'}
    </div>
  );
};

export default Cell;

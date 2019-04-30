import React from 'react';
import { css, cx } from 'emotion';
import { THEME } from '../config';

const cellClassName = css`
  width: 50px;
  height: 50px;
  border: 1px solid black;
`;

const activeClassName = css`
  background-color: ${THEME.ACTIVE_COLOR};
`;

const notActiveClassName = css`
  background-color: ${THEME.DISABLE_COLOR};
`;

interface ICell {
  isActive: boolean;
}

const Cell: React.FC<ICell> = ({ isActive }: ICell): JSX.Element => {
  return (
    <div
      className={cx(
        cellClassName,
        isActive ? activeClassName : notActiveClassName,
      )}
    />
  );
};

export default Cell;

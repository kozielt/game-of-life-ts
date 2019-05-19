import React from 'react';
import { css, cx } from 'emotion';
import { THEME } from '../../config';

const cellCss = css`
  width: 50px;
  height: 50px;
  border: 1px solid black;
`;

const activeCss = css`
  background-color: ${THEME.ACTIVE_COLOR};
`;

const notActiveCss = css`
  background-color: ${THEME.DISABLE_COLOR};
`;

const editCss = css`
  cursor: pointer;
`;

interface ICell {
  isActive: boolean;
  isEdit: boolean;
  editAction: () => void;
}

const Cell: React.FC<ICell> = ({ isActive, isEdit, editAction }) => {
  return (
    <div
      onClick={() => isEdit && editAction()}
      className={cx(
        cellCss,
        isActive ? activeCss : notActiveCss,
        isEdit ? editCss : null,
      )}
    />
  );
};

export default Cell;

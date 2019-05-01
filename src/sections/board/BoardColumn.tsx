import React from 'react';
import { css } from 'emotion';
import Cell from './Cell';

const className = css`
  display: flex;
`;

interface IBoardColumn {
  rowState: boolean[];
}

const BoardColumn: React.FC<IBoardColumn> = ({
  rowState,
}: IBoardColumn): JSX.Element => {
  return (
    <div className={className}>
      {rowState.map((isActive, cellIndex) => (
        <Cell isActive={isActive} key={`${cellIndex}`} />
      ))}
    </div>
  );
};

export default BoardColumn;

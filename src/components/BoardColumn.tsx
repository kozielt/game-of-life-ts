import React from 'react';
import { css } from 'emotion';
import Cell from './Cell';

const className = css`
  display: flex;
`;

interface Props {
  rowState: boolean[];
}

const BoardColumn: React.FC<Props> = ({ rowState }: Props): JSX.Element => {
  return (
    <div className={className}>
      {rowState.map((isActive, cellIndex) => (
        <Cell isActive={isActive} key={`${cellIndex}`} />
      ))}
    </div>
  );
};

export default BoardColumn;

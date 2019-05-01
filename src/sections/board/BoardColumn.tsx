import React, { useContext } from 'react';
import { css } from 'emotion';
import Cell from './Cell';
import { DispatchContext } from '../../App';
import { changeCellStatus } from '../../actions';

const className = css`
  display: flex;
`;

interface IBoardColumn {
  isEdit: boolean;
  rowIndex: number;
  rowState: boolean[];
}

const BoardColumn: React.FC<IBoardColumn> = ({
  isEdit,
  rowIndex,
  rowState,
}: IBoardColumn): JSX.Element => {
  const dispatch = useContext(DispatchContext);
  return (
    <div className={className}>
      {rowState.map((isActive, cellIndex) => (
        <Cell
          isActive={isActive}
          key={`${cellIndex}`}
          editAction={() => {
            dispatch(changeCellStatus({ rowIndex, cellIndex }));
          }}
          isEdit={isEdit}
        />
      ))}
    </div>
  );
};

export default BoardColumn;

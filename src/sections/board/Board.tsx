import React from 'react';
import { css } from 'emotion';
import BoardColumn from './BoardColumn';

// todo modify flex grow via query
const boardClassName = css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  padding: 30px;
`;

interface IBoard {
  boardState: boolean[][];
  isEdit: boolean;
}

const Board: React.FC<IBoard> = ({
  boardState,
  isEdit,
}): JSX.Element => {
  return (
    <div className={boardClassName}>
      {boardState.map((rowArray, rowIndex) => (
        <BoardColumn
          rowState={rowArray}
          key={rowIndex}
          rowIndex={rowIndex}
          isEdit={isEdit}
        />
      ))}
    </div>
  );
};

export default Board;

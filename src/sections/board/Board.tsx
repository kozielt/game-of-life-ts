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
`;

interface IBoard {
  boardState: boolean[][];
}

const Board: React.FC<IBoard> = ({ boardState }: IBoard): JSX.Element => {
  return (
    <div className={boardClassName}>
      {boardState.map((rowArray, rowIndex) => (
        <BoardColumn rowState={rowArray} key={rowIndex} />
      ))}
    </div>
  );
};

export default Board;

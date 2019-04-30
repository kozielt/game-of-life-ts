import React from 'react';
import { css } from 'emotion';
import BoardColumn from './BoardColumn';

// todo modify flex grow via query
const boardClassName = css`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 3;
`;

interface BoardProps {
  boardState: boolean[][];
}

const Board: React.FC<BoardProps> = ({
  boardState,
}: BoardProps): JSX.Element => {
  return (
    <div className={boardClassName}>
      {boardState.map((rowArray, rowIndex) => (
        <BoardColumn rowState={rowArray} key={rowIndex} />
      ))}
    </div>
  );
};

export default Board;

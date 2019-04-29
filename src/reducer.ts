export enum ActionTypes {
  TICK = 'tick',
}

export interface Action {
  type: ActionTypes;
}

export function getNewCellState(
  currentElementIndex: number,
  rowAbove: any,
  currentRow: boolean[],
  rowUnder: any,
): boolean {
  const indexesToTry: number[] = [
    currentElementIndex - 1,
    currentElementIndex,
    currentElementIndex + 1,
  ].filter(el => el >= 0);

  const liveCellsAround = [currentRow, rowAbove, rowUnder]
    .filter(Boolean)
    .reduce((acc, row) => {
      const liveCellsInRow = indexesToTry.map(el => row[el]).filter(Boolean)
        .length;
      return acc + liveCellsInRow;
    }, 0);

  const currentState = currentRow[currentElementIndex];
  if (currentState) {
    return liveCellsAround === 3 || liveCellsAround === 4;
  }
  return liveCellsAround === 3;
}

export function reducer(state: boolean[][], action: Action): boolean[][] {
  switch (action.type) {
    case ActionTypes.TICK: {
      return state.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          const rowAbove = state[rowIndex - 1];
          const rowUnder = state[rowIndex + 1];
          return getNewCellState(cellIndex, rowAbove, row, rowUnder);
        }),
      );
    }
    default:
      return state;
  }
}

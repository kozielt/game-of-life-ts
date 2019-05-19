import {
  getNewCellState,
  getIndexesToTry,
  generateEmptyBoard,
} from './reducer';

describe('reducer', () => {
  describe('getIndexesToTry', () => {
    it('should return valid indexes', () => {
      const currentRowMock = [true, true, true];
      expect(getIndexesToTry(1, currentRowMock)).toEqual([0, 1, 2]);
      expect(getIndexesToTry(0, currentRowMock)).toEqual([0, 1]);
      expect(getIndexesToTry(2, currentRowMock)).toEqual([1, 2]);
    });
  });

  describe('getNewCellState', () => {
    it('should return true for 3 active cells around and false cellState', () => {
      const result = getNewCellState(
        1,
        [true, true, true],
        [false, false, false],
        [false, false, false],
      );

      expect(result).toBeTruthy();

      const secondResult = getNewCellState(
        1,
        [false, false, false],
        [false, false, false],
        [true, true, true],
      );
      expect(secondResult).toBeTruthy();
    });

    const thirdResult = getNewCellState(
      1,
      [false, false, false],
      [true, false, false],
      [true, false, true],
    );
    expect(thirdResult).toBeTruthy();
  });

  it('should return true if live cell has two active neighbours', () => {
    const result = getNewCellState(
      1,
      [false, false, false],
      [false, true, false],
      [true, false, true],
    );
    expect(result).toBeTruthy();

    const secondResult = getNewCellState(
      1,
      [false, true, true],
      [false, true, false],
      [false, false, false],
    );
    expect(secondResult).toBeTruthy();
  });

  it('should return true if live cell has three active neighbours', () => {
    const result = getNewCellState(
      1,
      [false, false, false],
      [false, true, true],
      [true, false, true],
    );
    expect(result).toBeTruthy();

    const secondResult = getNewCellState(
      1,
      [true, true, true],
      [false, true, false],
      [false, false, false],
    );
    expect(secondResult).toBeTruthy();
  });

  it('should handle first row', () => {
    const result = getNewCellState(0, undefined, [true, true], [true, true]);
    expect(result).toBeTruthy();

    const secondResult = getNewCellState(
      0,
      undefined,
      [true, false],
      [true, true],
    );
    expect(secondResult).toBeTruthy();

    const thirdResult = getNewCellState(
      0,
      undefined,
      [true, false],
      [false, true],
    );
    expect(thirdResult).toBeFalsy();
  });

  it('should handle last row', () => {
    const result = getNewCellState(0, [true, true], [true, true], undefined);
    expect(result).toBeTruthy();

    const secondResult = getNewCellState(
      0,
      [true, true],
      [true, false],
      undefined,
    );
    expect(secondResult).toBeTruthy();

    const thirdResult = getNewCellState(
      0,
      [false, true],
      [true, false],
      undefined,
    );
    expect(thirdResult).toBeFalsy();
  });

  it('should generate empty matrix with false values', () => {
    const result = generateEmptyBoard(3);
    expect(result).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });
});

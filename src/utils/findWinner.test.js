import findWinner from './findWinner';

describe('findWinner', () => {
  it('should return X for a horizonal X win', () => {
    const board = ['X','X','X','O','O',null,null,null,null];
    const result = findWinner(board);
    expect(result).toEqual('X');
  });
  it('should return null for no winner', () => {
    const board = ['X','X',null,null,'O',null,null,null,null];
    const result = findWinner(board);
    expect(result).toEqual(null);
  });
  it('should return X for a horizonal X win', () => {
    const board = ['X','X','X','O','O',null,null,null,null];
    const result = findWinner(board);
    expect(result).toEqual('X');
  });
  it('should return O for a diagonal O win', () => {
    const board = ['O','X','X',null,'O',null,null,null,'O'];
    const result = findWinner(board);
    expect(result).toEqual('O');
  });
})

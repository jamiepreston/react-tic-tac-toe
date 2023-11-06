const findWinner = (board) => {
  const [one, two, three, four, five, six, seven, eight, nine] = board;
  const horizontal = [[one, two, three], [four, five, six], [seven, eight, nine]];
  const vertical = [[one, four, seven], [two, five, eight], [three, six, nine]];
  const diagonal = [[one, five, nine], [three, five, seven]];
  const winner = [...horizontal, ...vertical, ...diagonal]
    .find(([a,b,c]) => a !== null && a === b && b === c);
  return winner !== undefined ? winner[0] : null;
};
export default findWinner;

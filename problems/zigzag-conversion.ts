let PLACEHOLDER_CHARACTER = '+';

const convert = (s: string, numRows: number): string => {
  let characters = s.split('');
  let result = '';
  let matrix = [];
  let column = 0;

  while (characters.length) {
    let isOddColumn = !!(column % 2);

    if (!matrix[column]) {
      matrix[column] = [];
    }

    for (let row = 0; row < numRows; row += 1) {
      let maybeReversedRow = isOddColumn ? numRows - 1 - row : row;
      let isAtTheEdge =
        isOddColumn &&
        (maybeReversedRow === 0 || maybeReversedRow === numRows - 1);

      if (isAtTheEdge) {
        matrix[column][maybeReversedRow] = PLACEHOLDER_CHARACTER;
      } else {
        let currentCharacter = characters.shift();
        matrix[column][maybeReversedRow] =
          currentCharacter || PLACEHOLDER_CHARACTER;
      }
    }

    if (characters.length) {
      column += 1;
    }
  }

  for (let row = 0; row < numRows; row += 1) {
    for (let column = 0; column < matrix.length; column += 1) {
      result +=
        matrix[column][row] === PLACEHOLDER_CHARACTER
          ? ''
          : matrix[column][row];
    }
  }

  return result;
};

export default convert;

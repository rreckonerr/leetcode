import { inputData } from './reverse-integer.index.json';
import reverse from './reverse-integer';

describe('#reverse', () => {
  test.each(inputData as [input: number, expected: number][])(
    `reverse(%s) :>> %s`,
    (input, expected) => {
      let result = reverse(input);

      expect(result).toEqual(expected);
    }
  );
});

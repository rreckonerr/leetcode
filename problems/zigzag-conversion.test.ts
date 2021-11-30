import { inputData } from './zigzag-conversion.input.json';
import convert from './zigzag-conversion';

describe('#convert', () => {
  test.each(inputData as [input: string, numRows: number, expected: string][])(
    `convert(%s, %s) :>> %s`,
    (input, numRows, expected) => {
      let result = convert(input, numRows);

      expect(result).toEqual(expected);
    }
  );
});

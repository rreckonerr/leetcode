import { inputData } from './string-to-integer-atoi.input.json';
import myAtoi from './string-to-integer-atoi';

describe('#myAtoi', () => {
  test.each(inputData as [input: string, expected: number][])(
    `myAtoi(%s) :>> %s`,
    (input, expected) => {
      let result = myAtoi(input);

      expect(result).toEqual(expected);
    }
  );
});

import { inputData } from './palindrome-number.input.json';
import isPalindrome from './palindrome-number';

describe('#isPalindrome', () => {
  test.each(inputData as [input: number, expected: boolean][])(
    `isPalindrome(%s) :>> %s`,
    (input, expected) => {
      let result = isPalindrome(input);

      expect(result).toEqual(expected);
    }
  );
});

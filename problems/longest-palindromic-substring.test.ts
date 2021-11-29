import { inputData } from './longest-palindromic-substring.input.json';
import longestPalindrome from './longest-palindromic-substring';

describe('#longestPalindrome', () => {
  test.each(inputData as [input: string, expected: string][])(
    `longestPalindrome(%s) :>> %s`,
    (input, expected) => {
      let result = longestPalindrome(input);

      expect(result).toEqual(expected);
    }
  );
});

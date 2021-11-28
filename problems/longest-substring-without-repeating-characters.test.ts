import { inputData } from './longest-substring-without-repeating-characters.input.json';
import lengthOfLongestSubstring from './longest-substring-without-repeating-characters';

describe('#lengthOfLongestSubstring', () => {
  test.each(inputData as [inputString: string, expected: number][])(
    `lengthOfLongestSubstring(%s) :>> %s`,
    (inputString, expected) => {
      let result = lengthOfLongestSubstring(inputString);

      expect(result).toEqual(expected);
    }
  );
});

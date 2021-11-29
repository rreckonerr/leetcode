/* 

  FIRST NAIVE SOLUTION

  const isPalindrome = (input: string) => {
  const reversed = input.split('').reverse().join('');

  return reversed === input;
};

const longestPalindrome = (input: string): string => {
  let characters = input.split('');
  let longestPalindrome = '';

  for (let i = 0; i < characters.length; i += 1) {
    let currentCharacter = characters[i];
    let lastMatchIndex = input.lastIndexOf(currentCharacter);

    while (lastMatchIndex >= i) {
      let fragment = input.slice(i, lastMatchIndex + 1);

      if (
        isPalindrome(fragment) &&
        fragment.length > longestPalindrome.length
      ) {
        longestPalindrome = fragment;
        break;
      }

      lastMatchIndex = input.lastIndexOf(currentCharacter, lastMatchIndex - 1);
    }

    if (lastMatchIndex + 1 === input.length) break;
  }

  return longestPalindrome;
}; */

const expandAroundCenters = (input: string, left: number, right: number) => {
  let L = left;
  let R = right;

  while (L >= 0 && R < input.length && input.charAt(L) === input.charAt(R)) {
    L -= 1;
    R += 1;
  }

  return R - L - 1;
};

const longestPalindrome = (input: string): string => {
  if (!input) return '';

  let start = 0;
  let end = 0;

  for (let i = 0; i < input.length; i += 1) {
    let len1 = expandAroundCenters(input, i, i);
    let len2 = expandAroundCenters(input, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }

  return input.slice(Math.ceil(start), end + 1);
};

export default longestPalindrome;

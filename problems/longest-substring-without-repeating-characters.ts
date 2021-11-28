const lengthOfLongestSubstring = (inputString: string): number => {
  if (!inputString) return 0;

  let longestMatch = '';
  let max = 0;

  inputString.split('').forEach((character) => {
    while (longestMatch.includes(character)) {
      longestMatch = longestMatch.slice(1);
    }

    longestMatch += character;

    if (longestMatch.length > max) {
      max = longestMatch.length;
    }
  });

  return max;
};

export default lengthOfLongestSubstring;

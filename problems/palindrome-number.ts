const popDigit = (n: number) => n % 10;
const pushDigit = (source: number, n: number) => source * 10 + n;

const isPalindrome = (x: number): boolean => {
  if (x < 0) return false;

  let source = x;
  let reversedNumber = 0;

  while (source > 0) {
    let currentDigit = popDigit(source);

    reversedNumber = pushDigit(reversedNumber, currentDigit);
    source = Math.floor(source / 10);
  }

  return x === reversedNumber;
};

export default isPalindrome;

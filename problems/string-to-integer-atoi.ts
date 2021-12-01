const myAtoi = (s: string): number => {
  let trimmed = s.trim();
  let [numberString] = trimmed.match(/^[+|-]?\d+/gi) || [];

  if (!numberString) return 0;

  let number = Number(numberString);

  if (number > 0x7fffffff) {
    return 0x7fffffff;
  }

  if (number < -0x7fffffff - 1) {
    return -0x7fffffff - 1;
  }

  return number;
};

export default myAtoi;

const reverse = (x: number): number => {
  let reverseAbs = +String(Math.abs(x)).split('').reverse().join('');

  if (reverseAbs > 0x7fffffff) return 0;

  return x < 0 ? -reverseAbs : reverseAbs;
};

export default reverse;

export const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

export default isPrime;

export const findGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }

  return findGcd(secondNumber, firstNumber % secondNumber);
};

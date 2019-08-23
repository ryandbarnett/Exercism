//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (n) => {
  if (n <= 0) {
    throw 'Classification is only possible for natural numbers.';
  }

  let sumOfFactors = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sumOfFactors += i;
    }
  }

  if (sumOfFactors === n) {
    return 'perfect';
  } else if (sumOfFactors > n) {
    return 'abundant';
  } else {
    return 'deficient';
  }
};

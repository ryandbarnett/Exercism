//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (nums) => {
  const digits = nums.toString().split('');

  if (digits.length === 1) return true;
  
  const powered = digits.map(digit => {
    return Math.pow(digit, digits.length);
  });
  const sum = powered.reduce((acc, curNum) => {
    return acc + curNum
  }, 0);
  return sum === nums;
};

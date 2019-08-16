//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strandOne, strandTwo) => {
  const oneChars = strandOne.split('');
  const twoChars = strandTwo.split('');

  if (oneChars.length === 0 && twoChars.length !== 0) {
    throw 'left strand must not be empty';
  }

  if (twoChars.length === 0 && oneChars.length !== 0) {
    throw 'right strand must not be empty';
  }

  if (oneChars.length > twoChars.length || twoChars.length > oneChars.length) {
    throw 'left and right strands must be of equal length';
  }

  let count = 0;

  oneChars.forEach((char, i) => {
    if (twoChars[i] !== char) count++;
  })
  
  return count;
};

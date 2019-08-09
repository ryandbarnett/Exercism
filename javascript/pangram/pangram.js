//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  return new Set(str.toLowerCase().replace(/\W|\d|_/g,'').split('')).size === 26;
};

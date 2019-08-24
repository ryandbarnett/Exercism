//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (s) => {
  return s.toLowerCase().replace(/[-| ]+/,'').split('').sort().every((char, i, chars) => {
    return char !== chars[i + 1]
  });
};

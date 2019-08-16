//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldValues) => {
  return Object.keys(oldValues).reduce((acc, value) => {
    oldValues[value].forEach(letter => {
      acc[letter.toLowerCase()] = Number(value)
    })
    return acc;
  }, {})
};

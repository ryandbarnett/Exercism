//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const value = (colors) => {
  let value = 0;
  colors.forEach((color, index) => {
    const multiplier = index ? 1 : 10;
    value += COLORS.indexOf(color) * multiplier;
  })
  return value;
};

//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (colors) => {
  const COLORS = ['black', 'brown'];
  let value = 0;
  if (colors[0] !== 'black') {
    value += COLORS.indexOf(colors[0]) * 10;
  }
  value += COLORS.indexOf(colors[1]);
  return value;

};

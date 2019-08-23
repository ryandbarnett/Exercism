//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (n) => {
  const numerals = [];
  numerals.push("M".repeat(Math.floor(n / 1000)));
  n = n % 1000;

  if (n >= 900) {
    numerals.push("CM");
    n = n - 900;
  }

  numerals.push("D".repeat(Math.floor(n / 500)));
  n = n % 500;

  if (n >= 400) {
    numerals.push("CD");
    n = n - 400;
  }

  numerals.push("C".repeat(Math.floor(n / 100)));
  n = n % 100;

  if (n >= 90) {
    numerals.push("XC");
    n = n - 90;
  }

  numerals.push("L".repeat(Math.floor(n / 50)));
  n = n % 50;

  if (n >= 40) {
    numerals.push("XL");
    n = n - 40;
  }

  numerals.push("X".repeat(Math.floor(n / 10)));
  n = n % 10;

  if (n === 9) {
    numerals.push("IX");
    n = n - 9;
  }

  numerals.push("V".repeat(Math.floor(n / 5)));
  n = n % 5;

  if (n === 4) {
    numerals.push("IV");
    n = n - 4;
  }

  numerals.push("I".repeat(n));

  return numerals.join('');
};

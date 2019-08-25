//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (x, y) => {
  const distance = findDistance(x, y);
  return calcPoints(distance);
};

const calcPoints = (distance) => {
  if (distance > 10) return 0;
  if (distance > 5) return 1;
  if (distance > 1) return 5;
  if (distance >= 0) return 10;
}

const findDistance = (x, y) => {
  return Math.sqrt(x ** 2 + y ** 2);
}
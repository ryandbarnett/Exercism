//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, age_seconds) => {
  switch (planet) {
    case 'earth':
      return Number((age_seconds / 31557600).toFixed(2));
      break;
    case 'mercury':
      return Number((age_seconds / (31557600 * 0.2408467)).toFixed(2));
      break;
    default:
      return 'error';
  }
};

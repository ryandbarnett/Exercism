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
    case 'venus':
      return Number((age_seconds / (31557600 * 0.61519726)).toFixed(2));
      break;
    case 'mars':
      return Number((age_seconds / (31557600 * 1.8808158)).toFixed(2));
      break;
    case 'jupiter':
      return Number((age_seconds / (31557600 * 11.862615)).toFixed(2));
      break;
    case 'saturn':
      return Number((age_seconds / (31557600 * 29.447498)).toFixed(2));
      break;
    case 'uranus':
      return Number((age_seconds / (31557600 * 84.016846)).toFixed(2));
      break;
    case 'neptune':
      return Number((age_seconds / (31557600 * 164.79132)).toFixed(2));
      break;
    default:
      return 'error';
  }
};

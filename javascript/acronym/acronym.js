//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  phrase = phrase.toLowerCase().replace('_', '').split(/[ |-]+/);
  return phrase.map(word => word[0].toUpperCase()).join('');
};

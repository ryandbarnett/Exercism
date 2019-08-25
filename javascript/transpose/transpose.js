//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  let result = [];
  const lengths = input.map(word => word.length);
  const longest = lengths.sort()[lengths.length - 1];
  const indexOfLongest = lengths.indexOf(longest);
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < longest; j++) {
      if (!result[j]) result[j] = [];

      if (!input[i][j]) {
        if (indexOfLongest > i) {
          result[j] = result[j] + ' ';
        } else {
          result[j] = result[j] + '';
        }
      } else {
        result[j] = result[j] + input[i][j];
      }
    }
  }

  if (result[result.length - 1]) {
    result[result.length - 1] = result[result.length - 1].trimEnd();
  }
  
  return result;
};

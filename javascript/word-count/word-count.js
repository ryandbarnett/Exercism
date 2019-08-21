//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Words {
  count(words) {
    words = words.toLowerCase().trim();
    var regex = /\n|\t| +/;
    const array = words.split(regex);
    const result = array.reduce((acc, cur) => {
      if (!acc[cur] || cur === 'constructor') {
        acc[cur] = 0;
      }
      acc[cur]++;
      return acc;
    }, {});
    console.log(result);
    return result;
  }
}

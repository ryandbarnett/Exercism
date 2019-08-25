//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  matches(list) {
    return list.filter(word => {
      word = word.toLowerCase();
      return this.word.split('').every(char => {
        const givenWordLetterCount = this.word.split('').filter(letter => letter === char).length;
        const currentWordLetterCount = word.split('').filter(letter => letter === char).length;
        const areLettersUsedOnce = givenWordLetterCount === currentWordLetterCount;
        return areLettersUsedOnce && word.includes(char) && word.length === this.word.length && word !== this.word;
      });
    });
  }
}

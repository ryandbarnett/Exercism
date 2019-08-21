//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this.input = scores
  }

  get scores() {
    return this.input;
  }

  get latest() {
    return this.input[this.input.length - 1]
  }

  get personalBest() {
    return [...this.input].sort((a, b) => a - b)[this.input.length - 1];
  }

  get personalTopThree() {
    return [...this.input].sort((a, b) => a - b).slice(-3).reverse();
  }
}

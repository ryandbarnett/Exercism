//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(str) {
    this.str = str;
  }

  get digits() {
    return this.str.split('').map(Number);
  }

  slices(n) {
    if (n > this.digits.length) throw 'Slice size is too big.';

    return this.digits.reduce((acc, cur, i) => {
      if (this.digits.slice(i, i + n).length === n) {
        acc.push(this.digits.slice(i, i + n));
      }
      return acc;
    }, [])
  }
}

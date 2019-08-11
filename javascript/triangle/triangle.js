//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    const {a,b,c} = this;
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error()
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error()
    }

    if (a === b && a === c) {
      return 'equilateral';
    }

    if (a === b || a === c || b === c) {
      return 'isosceles';
    }

    return 'scalene';
  }
}

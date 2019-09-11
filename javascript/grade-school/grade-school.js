//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.list = {};
  }

  roster() {
    return Object.keys(this.list).reduce((acc, key) => {
      acc[key] = [...this.list[key]];
      return acc;
    }, {});
  }

  add(name, grade) {
    if (!this.list[grade]) this.list[grade] = [];
    this.list[grade].push(name);
    this.list[grade].sort();
  }

  grade(n) {
    return this.list[n] ? [...this.list[n]] : [];
  }
}

//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = '0', mins = '0') {
    this.hours = this.calcHours(hours, mins).toString().padStart(2, '0');
    this.mins = this.calcMins(mins).toString().padStart(2, '0');
  }

  calcHours(hours, mins) {
    if (hours < 0) {
      return 24 + (hours % 24);
    }
    return ((hours + Math.floor(mins / 60)) % 24);
  }

  addExtraMinsToHours(mins) {
    Math.floor(mins / 60)
  }

  calcMins(mins) {
    if (mins < 0) {
      return 60 + (mins % 60);
    }
    return mins % 60;
  }

  toString() {
    return `${this.hours}:${this.mins}`;
  }

  plus() {
  }

  minus() {
  }

  equals() {
  }
}

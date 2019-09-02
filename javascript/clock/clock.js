//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = '0', mins = '0') {
    this.hours = this.calcHours(hours, mins);
    this.mins = this.calcMins(mins);
  }

  calcHours(hours, mins) {
    if (hours < 0) {
      return 24 + (hours % 24);
    }
    return hours % 24;
  }

  calcMins(mins) {
    if (mins >= 60) {
      this.hours = this.hours + Math.floor(mins / 60) % 24;
    }
    if (mins < 0) {
      if (this.hours + Math.floor(mins / 60) < 0) {
        this.hours = 24 + ((this.hours + Math.floor(mins / 60)) % 24);
      } else {
        this.hours = this.hours + Math.floor(mins / 60);
      }
      return 60 + (mins % 60);
    }
    return mins % 60;
  }

  toString() {
    const { hours, mins } = this;
    return `${hours.toString().padStart(2, '0')}:${this.mins.toString().padStart(2, '0')}`;
  }

  plus() {
  }

  minus() {
  }

  equals() {
  }
}

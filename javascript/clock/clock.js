//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour) {
    this.hour = hour.toString().padStart(2, '0');
  }

  toString() {
    return `${this.hour}:00`;
  }

  plus() {
  }

  minus() {
  }

  equals() {
  }
}

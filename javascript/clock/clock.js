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
    if (mins >= 60) {
      hours = hours + Math.floor(mins / 60) % 24;
    }
    if (mins < 0) {
      if (hours + Math.floor(mins / 60) < 0) {
        hours = 24 + ((hours + Math.floor(mins / 60)) % 24);
      } else {
        hours = hours + Math.floor(mins / 60);
      }
    }

    if (hours < 0) {
      return 24 + (hours % 24);
    }
    return hours % 24;
  }

  calcMins(mins) {
    return mins < 0 ? 60 + (mins % 60) : mins % 60;
  }

  toString() {
    const { hours, mins } = this;
    return `${hours.toString().padStart(2, '0')}:${this.mins.toString().padStart(2, '0')}`;
  }

  plus(n) {
    const { hours, mins, calcMins, calcHours } = this;
    this.mins = calcMins(mins + n);
    this.hours = calcHours(hours + Math.floor((mins + n) / 60), mins);
    return this;
  }

  minus(n) {
    const { hours, mins, calcMins, calcHours } = this;
    this.mins = calcMins(mins - n);
    this.hours = calcHours(hours + Math.floor((mins - n) / 60) % 24, mins);
    return this;
  }

  equals(otherClock) {
    return otherClock.hours === this.hours && otherClock.mins === this.mins;
  }
}

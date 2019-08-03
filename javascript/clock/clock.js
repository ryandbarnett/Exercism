//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minutes = 0) {
    this.hour = this.hourMaker(hour, minutes);
    this.minutes = this.minuteMaker(minutes);
  }

  hourMaker (hour, minutes) {
    if (hour < 0) {
      hour = 24 + (hour % 24);
    }
    if(minutes < 0) {
      hour = hour + Math.round(minutes / 60);
    }
    return minutes >= 60 ? hour + Math.floor(minutes / 60) : hour;
  }

  minuteMaker (minutes) {
    if (minutes < 0) {
      return 60 - Math.abs(minutes);
    } else {
      return minutes % 60;
    }
  }

  padHours (hours) {
    if (hours >= 24 && this.hour >= 24) {
      hours = hours % 24;
    }

    if(hours > 10) return hours;
    var s = "0" + hours;
    return s;
  }

  padMinutes (mins) {
    if(mins > 10) return mins;
    var s = "0" + mins;
    return s;
  }

  toString() {
    const {hour, minutes} = this;
    return `${this.padHours(hour)}:${this.padMinutes(minutes)}`;
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}

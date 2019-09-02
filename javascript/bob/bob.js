/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.replace(/[ \t\r\n]/g, '');
  const isQuestion = /\?$/.test(message);
  if (!message) return 'Fine. Be that way!';
  message = message.replace(/[^a-zA-Z]/g, '');
  const isYelling = /^[A-Z]+$/.test(message);
  const isForcefulQuestion = isQuestion && isYelling;
  if (isForcefulQuestion) {
    return 'Calm down, I know what I\'m doing!';
  } else if (isYelling) {
    return 'Whoa, chill out!';
  } else if (isQuestion) {
    return 'Sure.';
  } 
  return 'Whatever.';
};

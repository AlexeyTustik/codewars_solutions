//https://www.codewars.com/kata/559ac78160f0be07c200005a
const nameShuffler = (str) => {
  [firstName, lastName] = str.split(" ");
  return `${lastName} ${firstName}`;
};

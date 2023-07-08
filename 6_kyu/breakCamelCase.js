//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// complete the function
const solution = (string) =>
  string
    .split("")
    .map((char) => (char.toUpperCase() === char ? ` ${char}` : char))
    .join("");

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));

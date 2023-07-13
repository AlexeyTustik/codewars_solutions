const check = (s1, s2) =>
  s1.length === s2.length
    ? [...s1].sort().join("") === [...s2].sort().join("")
    : false;

console.log(check("abc", "acb"));
console.log(check("aabc", "abca"));
console.log(check("aabc", "bbca"));
console.log(check("aab", "aaba"));

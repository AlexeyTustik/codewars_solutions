//https://www.codewars.com/kata/57eae65a4321032ce000002d

const fakeBin = (x) => x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");

console.log(fakeBin("45385593107843568")); // "01011110001100111
console.log(fakeBin("509321967506747")); //"101000111101101"

//https://www.codewars.com/kata/56efc695740d30f963000557
String.prototype.toAlternatingCase = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      result += this[i].toLowerCase();
    } else {
      result += this[i].toUpperCase();
    }
  }
  return result;
};

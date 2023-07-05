//https://www.codewars.com/kata/5949481f86420f59480000e7
function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 == 0 ? "even" : "odd";
}

//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
var humanYearsCatYearsDogYears = function (humanYears) {
  return [humanYears, catYears(humanYears), dogYears(humanYears)];
};

function catYears(humanYears) {
  return (
    15 +
    (humanYears >= 2 ? 9 : 0) +
    (humanYears >= 3 ? 4 * (humanYears - 2) : 0)
  );
}

function dogYears(humanYears) {
  return (
    15 +
    (humanYears >= 2 ? 9 : 0) +
    (humanYears >= 3 ? 5 * (humanYears - 2) : 0)
  );
}

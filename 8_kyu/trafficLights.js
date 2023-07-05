//https://www.codewars.com/kata/58649884a1659ed6cb000072
const colors = ["green", "yellow", "red"];

function updateLight(current) {
  return colors[(colors.indexOf(current) + 1) % colors.length];
}

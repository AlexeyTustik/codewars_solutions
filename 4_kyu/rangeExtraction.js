const bufferToString = (buffer) => {
  if (buffer.length === 1) return buffer[0];
  else if (buffer.length == 2) return `${buffer[0]},${buffer[1]}`;
  else return `${buffer[0]}-${buffer[buffer.length - 1]}`;
};

const solution = (range) => {
  const buffer = [];
  const result = [];
  for (let i = 0; i < range.length; i++) {
    if (!buffer.length) {
      buffer.push(range[i]);
    } else if (range[i] - 1 === buffer[buffer.length - 1])
      buffer.push(range[i]);
    else {
      result.push(bufferToString(buffer));
      while (buffer.length > 0) buffer.pop();
      buffer.push(range[i]);
    }
  }
  result.push(bufferToString(buffer));
  return result.join(",");
};

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ]),
  "-6,-3-1,3-5,7-11,14,15,17-20"
);

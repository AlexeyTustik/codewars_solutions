//https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

const toBinaryString = (num, leadingZeros = 8) => {
  let binaryString = num.toString(2);
  while (binaryString.length < leadingZeros) {
    binaryString = "0" + binaryString;
  }
  return binaryString;
};

const ipToNumber = (mask) => {
  return parseInt(
    mask
      .split(".")
      .map((el) => toBinaryString(+el))
      .join(""),
    2
  );
};

const ipsBetween = (start, end) => ipToNumber(end) - ipToNumber(start);

console.log(ipsBetween("150.0.0.0", "150.0.0.1")); //1
console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // 50
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); // 246;
console.log(ipsBetween("10.11.12.13", "10.11.13.0")); // 243
console.log(ipsBetween("160.0.0.0", "160.0.1.0")); // 256
console.log(ipsBetween("170.0.0.0", "170.1.0.0")); // 65536
console.log(ipsBetween("50.0.0.0", "50.1.1.1")); // 65793
console.log(ipsBetween("180.0.0.0", "181.0.0.0")); // 16777216
console.log(ipsBetween("1.2.3.4", "5.6.7.8")); // 67372036
console.log(ipsBetween("0.0.0.0", "255.255.255.255")); // 2 ** 32 - 1

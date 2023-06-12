/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //let minElement = digits[0];
  let number = digits.join(""); //to string
  let increment = 1;

  calculate(number, increment);

  function calculate(number, minElement) {
    let result = Number(number) + minElement;
    let arrayOfDigits = Array.from(String(result), Number);
    return arrayOfDigits;
  }
};
let digits = [1, 0];
console.log(plusOne(digits));

// if (digits[i] < minElement) {
//     minElement = digits[i];
//   }

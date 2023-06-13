/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1; // start with carry of 1

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry; // add the curr digit and the carry
    digits[i] = sum % 10; // update the digit in the array
    carry = Math.floor(sum / 10); // update the carry

    if (carry === 0) {
      // if the carry becomes zero, no need to continue
      break;
    }
  }
  // if there is still a carry, it means we need to add an additional digit
  if (carry > 0){
    digits.unshift(carry);
  }
  
  return digits;
};
let digits = [4,3,2,1];
console.log(plusOne(digits));

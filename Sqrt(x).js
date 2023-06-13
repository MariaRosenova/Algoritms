/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // check if the x = 0 || x = 1
    if (x === 0 || x=== 1) return x;

    let i = 1;
    let result = 0;
    
    while (result <= x){
        i++; //2
        result = i*i; // 4
    }
    return i - 1; // 2 -> the power will be 1

};
let x = 4;
console.log(mySqrt(x));
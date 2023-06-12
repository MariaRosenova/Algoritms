/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let isPalindrome = false;
    let temp = x.toString().split('');
    let lastElement = temp[temp.length - 1];
    let firstElement = temp[0];
    
    if(lastElement !== firstElement){
        return isPalindrome;
    }
    else{
        isPalindrome = true;
        return isPalindrome;
    }
    
};
const x = 1000021;
console.log(isPalindrome(x));

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    const result = String(num);
    let i = result.length - 1;

    while(num[i] == '0') i--;
    return result.slice(0, i+1);
};
const num = "51230100";
console.log(removeTrailingZeros(num))
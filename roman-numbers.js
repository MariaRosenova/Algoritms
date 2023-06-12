/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0

    let m = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for(let i = 0; i < s.length; i++){
       let first = s[i];
       let second = s[i+1];

       if(m[first] < m[second]){
           res -= m[first];
       } else {
           res += m[first];
       }
    }
    return res;
};
const s = "MCMXCIV";
console.log(romanToInt(s));

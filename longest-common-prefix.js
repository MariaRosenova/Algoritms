/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let longestPr = "";

    if (strs == null || strs.length == 0){

        return longestPr;
    }

    let minLength = strs[0].length;

    for (let i = 1; i < strs.length; i++){

        minLength = Math.min(minLength, strs[i].length);
    }

    for (let i = 0; i < minLength; i++){

        let current = strs[0][i];

        for (let j = 0; j < strs.length; j++){
            let temp = strs[j][i];
            if(strs[j][i] != current){
                return longestPr;
            }
        }
        longestPr += current;
    }
    return longestPr;

};

const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs))
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let indexOfFirstMatch = haystack.indexOf(needle);

  if (indexOfFirstMatch !== -1) {
    return indexOfFirstMatch;
  } else {
    return -1;
  }
  return index(haystack, needle);
};

let haystack = "sadbutsad";
let needle = "sad";
console.log(strStr(haystack, needle));

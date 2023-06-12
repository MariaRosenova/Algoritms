/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arrayOfTheWord = [];
    let spliter = (s.trim()).split('');
    for (let i = spliter.length - 1 ; i >= 0; i--){
      if(spliter[i] != ' '){
        arrayOfTheWord.push(spliter[i]);
      }
      else{
        break;
      }
    }
    return arrayOfTheWord.length;
};

let s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s));
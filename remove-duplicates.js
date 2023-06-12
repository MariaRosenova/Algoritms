var removeDuplicates = function(nums) {
    nums.sort();
    for(let i = 0; i < nums.length; i++){
            if(nums[i] === nums[i+1]){
                nums.splice(i + 1, 1);
                i--;
            }
        }
    nums.sort((a, b) => a - b)
    return nums.length
};
const nums =[1,1,2]
console.log(removeDuplicates(nums));
//[-3,-1,0,3]
//[0,1,2,3,4]
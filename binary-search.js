let searchInsert = function (nums, target){
    let start = 0;
    let end = nums.length - 1;
    let ans = nums.length;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] < target){
            start = mid + 1;
        }
        else{
            ans = mid;
            end = mid - 1;
        }
    }
    return ans;
}

let nums = [1,3,5,6];
let target = 5;
console.log(searchInsert(nums, target))
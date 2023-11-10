let nums = [0,3,1,5,2,4]
const ans = new Array (nums.length)




function test(nums) {
    for (let i = 0 ; i < nums.length ; i++){
        ans[i]  = nums[nums[i]] 
    }
  
    return ans
};

console.log(test(nums))
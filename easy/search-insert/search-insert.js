const searchInsert = (nums, target) => {
    if(target < nums[0]){
        return 0
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        }
        if(nums[i] < target && nums[i + 1] > target){
            return i + 1
        }
    }
    return nums.length
}

console.log(searchInsert([1,3,5,6], 7))

// Can divide and conquer 
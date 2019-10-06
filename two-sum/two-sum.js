// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
    for(var i = 0; i < nums.length; i++){
      for(var j = i+1; j < nums.length; j++){
        if(nums[i] + nums[j] === target){
          return [i, j]
        }
      }
    }
  }
  
  //console.log(twoSum([3,2,4], 6))
  
  //WIP BELOW
  
  const optimizedTwoSum = (numbers, target) => {
    let result =[]
    let numberLookup = {
      // 3: 0,
      // 2: 1,
      // 4: 2
    }
    numbers.forEach((num, index) => {
      numberLookup[num] = index
    })
    numbers.sort((a,b) => {a-b})
    numbers.forEach((num, index) => {
      let j = numbers.length -1
      while(numbers[j] + num > target && j>index + 1){
        j--
      }
      if(numbers[j] + num === target){
        result.push(numberLookup[numbers[j]], numberLookup[num])
        return
        //return [numberLookup[numbers[j]], numberLookup[num]]
      }
    })
    return result
  }
  
  console.log(optimizedTwoSum([3,2,4], 6))
  
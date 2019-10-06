// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const addTwoNumbers = (listOne, listTwo) => {
    const arrayOne = buildArray(listOne).reverse()
    const arrayTwo = buildArray(listTwo).reverse()
    const arraySum = addArrays(arrayOne, arrayTwo)
    return buildList(arraySum)
  }
  
  const buildList = (array) => {
    let result = {}
    let currentNode = result
    for(var i = 0; i < array.length; i++){
      currentNode.val = array[i]
      currentNode.next = i === array.length -1 ? null : {}
      currentNode = currentNode.next
    }
    return result
  }
  
  const addArrays = (arrayOne, arrayTwo) => {
    const result = []
    let longArray = arrayOne.length >= arrayTwo.length
      ? arrayOne
      : arrayTwo
    let shortArray = arrayOne.length < arrayTwo.length
      ? arrayOne
      : arrayTwo
    for(var i = longArray.length - 1; i>=0; i--){
      const sum = Number(longArray[i]) + Number(shortArray[shortArray.length -1] || 0)
      if(sum <10){
        result.push(sum)
      } else {
        result.push(sum - 10)
        if(i === 0){
          result.push(1)
        } else {
          longArray[i -1]++
        }
      }
      shortArray.pop()
    }
    return result
  }
  
  const buildArray = (list) => {
    let resultArray = []
    let currentNode = list
    while(currentNode){
      resultArray.push(currentNode.val.toString())
      currentNode = currezntNode.next
    }
    return resultArray
  }
  
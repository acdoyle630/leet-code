const isPalindrome = (num) => {
    const numArray = num.toString().split('')
    return numArray.every((number, index) => (
      number === numArray[numArray.length - (1+index)]
    ))
  }
  
  const isPalindromeNoString = (num) => {
    if(num < 0 ){ return false }
    let binaryResult = {}
    let power = 0
    while(Math.pow(10, power) <= num){
      power++
    }
    for(var i = power -1; i >=0; i--){
      if(num < Math.pow(10, i)){
        binaryResult[i] = 0
      } else {
        binaryResult[i] = Math.floor(num / Math.pow(10,i))
        num = num - binaryResult[i] * Math.pow(10, i)
      }
    }
    const binaryResultArray = Object.values(binaryResult)
    return binaryResultArray.every((number, index) => (
      number === binaryResultArray[binaryResultArray.length - (1+ index)]
    ))
  }
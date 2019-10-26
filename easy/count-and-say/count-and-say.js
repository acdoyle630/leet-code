const countAndSay = (n) => {
    let table = {
      1: '1'
    }
    for(let i = 2; i <= n; i++ ) {
      table[i] = sayLastNum(table[i - 1])
    }
    return table[n]
  }
  
  const sayLastNum = (num) => {
    let result = ''
    for(let i = 0; i < num.length;) {
      let consecutiveNumbers = 1
      let currentNext = i + 1
      while(num[currentNext] === num[i]){
        consecutiveNumbers++
        currentNext++
      }
      result += (consecutiveNumbers.toString() + num[i])
      i = i+consecutiveNumbers
    }
    return result
  }
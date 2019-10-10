const longestCommonPrefix = (array) => {
 let result = ''
 if(array.length === 0 ) { return result}
  let match = true
  for(var i = 0; i < array[0].length; i++){
    const currentLetter = array[0][i]
    for(var j = 0; j < array.length; j++){
        if(array[j][i] !== currentLetter){
            match = false
        }
    }
    if(match){
        result += currentLetter
    }
  }
  return result
}


console.log(longestCommonPrefix(['hello', 'hell']))

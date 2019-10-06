// BRUTE FORCE

const longestPalindromicSubstring = (string) => {
  let longestSubstring = ''
  for(var i = 0; i < string.length; i++){
      for(var j = i; j<=string.length; j++){
          let substring = string.substring(i, j)
          if(isPalindrome(substring) && substring.length > longestSubstring.length){
              longestSubstring = substring
          }
      }
  }
  return longestSubstring
}

const isPalindrome = (substringArray) => {
    for(var i = 0; i<substringArray.length; i++){
        if(substringArray[i] !== substringArray[substringArray.length - (1+i)]){
            return false
        }
    }
    return true
}

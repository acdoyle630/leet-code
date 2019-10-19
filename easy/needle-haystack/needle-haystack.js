const strStr = (haystack, needle) => {
    if(needle === haystack || needle === ''){
        return 0
    }
    for(let i = 0; i<haystack.length; i++){
        if(haystack[i] === needle[0]){
            if(needle.length === 1){
                return i
            }
            for(let j = i+1; j < i + needle.length; j++){
                if(haystack[j] !== needle[j-i]){
                    break
                }
                if(haystack[j] === needle[j-i] && j === i + needle.length -1){
                    return i
                }
            }
        }
    }
    return -1
}

console.log(strStr('aaa','a'))
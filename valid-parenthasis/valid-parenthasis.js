const isValid = (string) => {
    const parenthasis = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }
    const openParenthasis = []

    for(var i = 0; i < string.length; i++){
        const closeParenthasis = Object.values(parenthasis)
        const closeParenIndex = closeParenthasis.indexOf(string[i])
        if(parenthasis[string[i]]){
            openParenthasis.push(string[i])
        }
        if(closeParenIndex !== -1){
            if(parenthasis[openParenthasis[openParenthasis.length -1]] === closeParenthasis[closeParenIndex]){
                openParenthasis.pop()
            } else {
                return false
            }
        }
    }
    return openParenthasis.length === 0
}

console.log(isValid('()[]{}'))
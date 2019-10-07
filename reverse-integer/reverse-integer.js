// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: 
// [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

const reverse = (x) => {
    if(x < -2147483648 || x > 2147483648){
        return 0
    }
    let result = 0
    let multiplier = 1
    if(x < 0){
        multiplier = -1
        x = x * -1
    }
    const digits = x.toString().split('')
    for(var i = digits.length -1; i >= 0; i--){ // i == 1
        const value = Math.pow(10, i) * Number(digits[i]) 
        result += value
    }
    return result < 2147483648
        ? result * multiplier
        : 0
}

console.log(reverse(-123))
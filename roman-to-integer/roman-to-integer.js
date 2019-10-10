const romanToInt = (romanString) => {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    const romanArray = romanString.split('')
    let currentIndex = 0
    let total = 0

    while(currentIndex < romanArray.length){
        if(romanValues[romanArray[currentIndex]] > romanValues[romanArray[currentIndex + 1]]){
            total += romanValues[romanArray[currentIndex]]
            currentIndex++
        }
        if(!romanArray[currentIndex+1] || romanArray[currentIndex] === romanArray[currentIndex + 1]){
            total += romanValues[romanArray[currentIndex]]
            currentIndex++
        }
        if(romanValues[romanArray[currentIndex]] < romanValues[romanArray[currentIndex + 1]]){
            total += (romanValues[romanArray[ currentIndex +1]] - romanValues[romanArray[currentIndex]])
            currentIndex += 2
        }
    }
    return total
}

console.log(romanToInt('III'))
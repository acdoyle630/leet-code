// const maxSubArray = (array) => {
//     let largestSum
//     for(let i=0; i<array.length; i++){
//         let sum = array[i]
//         if(sum > largestSum || largestSum === undefined){
//             largestSum = sum
//         }
//         for(let j = i+1; j<array.length; j++){
//             sum += array[j]
//             if(sum > largestSum){
//                 largestSum = sum
//             }
//         }
//     }
//     return largestSum
// }

// console.log(maxSubArray([-1,0,-2]))

var maxSubArray = function(arr) {
    let maxLocal = maxGlobal = arr[0]

	  for (let i = 1; i < arr.length; i ++){
        console.log(`I: ${i}`)
		maxLocal = Math.max(arr[i], maxLocal + arr[i])
        console.log(`MAX LOCAL: ${maxLocal}`)
		if (maxLocal > maxGlobal) {
		  maxGlobal = maxLocal;
		}
	  }
	return maxGlobal;
}

// const maxSubArray = ( arr ) => {
//     let maxLocal = maxGlobal = arr[0]
//     console.log(maxLocal)
//     for(let i = 0; i < arr.length; i++){
//         maxLocal = Math.max(arr[i], maxLocal + arr[i])
//         console.log(`MAX LOCAL: ${maxLocal}`)
//         maxGlobal = Math.max(maxGlobal, maxLocal)
//     }
//     return maxGlobal
// }

console.log(maxSubArray([1]))




const findMedianSortedArrays = (arrayOne, arrayTwo) => {
    const combinedArray = arrayOne.concat(arrayTwo)
    const sortedCombinedArray = combinedArray.sort((a, b ) =>  a - b )
    return findMedian(sortedCombinedArray)
}

const findMedian = (array) => (
    array.length % 2 === 0
       ? ((array[array.length / 2] + array[(array.length / 2) - 1]) / 2)
       : array[Math.floor(array.length / 2)]
)

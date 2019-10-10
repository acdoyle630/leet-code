const maxArea = (heights) => {
    let largestArea = 0
    for(var i =0; i<heights.length; i++){
        for(var j=i+1; j<heights.length; j++){
            const shortest = heights[i] <= heights[j]
                ? heights[i]
                : heights[j]
            const distance = j - i
            if((shortest*distance) > largestArea){
                largestArea = shortest*distance
            }
        }
    }
    return largestArea
}

maxArea([1,8,6,2,5,4,8,3,7])

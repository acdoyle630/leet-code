const listOne = {
    val: 1,
    next: {
        val: 3, 
        next: { 
            val: 4,
            next: null
        }
    }
}

const listTwo = {
    val: 1,
    next: {
        val: 2, 
        next: { 
            val: 5,
            next: null
        }
    }
}


const mergeTwoLists = (listOne, listTwo) => {
    
    if(!listOne) return listTwo
    if(!listTwo) return listOne

    let firstList = listOne.val <= listTwo.val
        ? listOne
        : listTwo

    let secondList = listOne.val > listTwo.val
        ? listOne
        : listTwo
    
    let currentFirstNode = firstList
    let currentSecondNode = secondList
    let currentResultNode = { val: firstList.val }
    let resultList = currentResultNode
    currentFirstNode = currentFirstNode.next
    while(currentFirstNode || currentSecondNode){ 
        if(!currentFirstNode || currentSecondNode && currentSecondNode.val <= currentFirstNode.val){
            currentResultNode.next = { val: currentSecondNode.val }
            currentResultNode = currentResultNode.next
            currentSecondNode = currentSecondNode.next
        }
        else if(!currentSecondNode || currentFirstNode.val <= currentSecondNode.val){
            currentResultNode.next = { val: currentFirstNode.val }
            currentResultNode = currentResultNode.next
            currentFirstNode = currentFirstNode.next
        }
    }
    return resultList
}

console.log(mergeTwoLists(listOne, listTwo))
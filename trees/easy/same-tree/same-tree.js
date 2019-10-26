// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

const treeOne = {               //1
    val: 1,
    left: {
        val: 2               //2        null
    },
    right: {
        val: 1
    }
}

const treeTwo = {               //1
    val: 1, 
    left: {
        val:1,                //null      2
    },
    right: {
        val:2
    }
}

const isSameTree = (treeOne, treeTwo) => {
    if(!treeOne && !treeTwo){
        return true
    }
    let treeOneNodes = []
    let treeTwoNodes = []
    let currentTreeOneNode = treeOne
    let currentTreeTwoNode = treeTwo
    const searchTree = (nodeOne, nodeTwo) => {
        if(
            !nodeOne || 
            !nodeTwo ||
            nodeOne.val !== nodeTwo.val ||
            nodeOne.left && !nodeTwo.left ||
            nodeOne.right && !nodeTwo.right ||
            !nodeOne.left && nodeTwo.left ||
            !nodeOne.right && nodeTwo.right
            ){
            return false
        }
        if(nodeOne.left && nodeTwo.left){
            return searchTree(nodeOne.left, nodeTwo.left)
        } 
        if(nodeOne.right && nodeTwo.right){
            return searchTree(nodeOne.right, nodeTwo.right)
        }
        return true
    }
    return searchTree(treeOne, treeTwo)
}

console.log(isSameTree(treeOne, treeTwo))
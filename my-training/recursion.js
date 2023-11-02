const quickSort = arr => {
    if(arr.length < 2) {
        return arr
    }

    let arrLeft = [];
    let arrRight = [];
    let equal = [];
    let pivot = arr[Math.floor(arr.length/2)];
    for(let elem of arr) {
        if(elem < pivot) {
            arrLeft.push(elem)
        } else if(elem == pivot) {
            equal.push(elem)
        } else {
            arrRight.push(elem)
        }
    }

    return[...quickSort(arrLeft), ...equal, ...quickSort(arrRight)]
}

let arr = [2, 41, 42, 75, 12, 1, 6, 97, 5, 6]

console.log(quickSort(arr))
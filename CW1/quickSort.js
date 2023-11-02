const quickSort = (arr) => {
    // let time = performance.now();
    if(arr.length < 2) {
        return arr
    }

    let pivot = arr[Math.floor(arr.length/2)];
    let arrLower = [];
    let equals = [];
    let arrBigger = [];

    for(let elem of arr) {
        if(elem < pivot) {
            arrLower.push(elem)
        } else if (elem == pivot) {
            equals.push(elem)
        } else {
            arrBigger.push(elem)
        }
    }

    // time = performance.now() - time;
    // console.log(time)

    return [...quickSort(arrLower), ...equals, ...quickSort(arrBigger)]
}

const arr = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000))

console.time('Quick sort:')
console.log(quickSort(arr))
console.timeEnd('Quick sort:')


const quickSort = (arr) => {
    // let time = performance.now();
    const size = arr.length; //для читабельности
    if(size < 2) {
        return arr
    }
    const middle = Math.floor(arr.length/2);
    const pivot = arr[middle];
    const arrLower = [];
    const equals = [];
    const arrBigger = [];

    for(let elem of arr) {
        if(elem < pivot) {
            arrLower.push(elem);
            continue;
        } 
        if (elem == pivot) {
            equals.push(elem);
            continue;
        }
        if(elem > pivot) {
            arrBigger.push(elem);
            continue;
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


const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j< arr.length; j++) {
            if(arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}

const arr = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000))

console.time('Bubble sort:')
console.log(bubbleSort(arr))
console.timeEnd('Bubble sort:')
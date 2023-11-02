const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length-i; j++) {
            if(arr[j+1] < arr[j]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

const selectedSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

const cycleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let position = i;

        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < value) {
                position++
            }
        }

        if(position == i) {
            continue;
        }

        while(arr[position] == value) {
            position++
        }

        [arr[position], value] = [value, arr[position]]

        while(position !== i) {
            position = i;
            for(let k = i+1; k < arr.length; k++) {
                if(arr[k] < value) {
                    position++
                }
            }
            while(value == arr[position]) {
                position++
            }

            [arr[position], value] = [value, arr[position]]
        }

    }
    return arr
}

// const partition = (arr, start, end) => {
//     const pivot = arr[end];
//     const i = start;

//     for(let j = start; j <= end-1; j++) {
//         if(arr[j] <= pivot) {
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//             i++
//         }
//     }

//     [arr[i], arr[end]] = [arr[end], arr[i]]
//     return i;
// }

// const quickSort = (arr, start, end) => {
//     if(start < end) {
//         const pi = partition(arr, start, end);

//         quickSort(arr, start, pi-1);
//         quickSort(arr, pi+1, end);
//     }
// }

const quickSort = (arr) => {
    if(arr.length < 2) {
        return arr
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return(quickSort(left).concat(pivot, quickSort(right)))
}

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

const merge = (arr1, arr2) => {
    let arrSorted = [];
    let i = j = 0;

    while(i < arr1.length && j < arr2.length) {
        arrSorted.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[i++])
    }

    return[...arrSorted, ...arr1.slice(i), ...arr2.slice(j)]
}

const mergeSort = (arr) => {
    if(arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length/2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);

    return(merge(mergeSort(arrLeft), mergeSort(arrRight)))
}

const insetrtionSort = arr => {
    for(let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i;

        while(j > 0 && arr[j-i] > current) {
            arr[j] = arr[j-1];
            j--
        }
        arr[j] = current;
    }

    return arr;
}

let arr = [7, 5, 5, 12, 234, 6, 6, 4, 2, 19]

console.log(insetrtionSort(arr))

// console.log(mergeSort(arr))
// console.log(selectionSort(arr))
// console.log(quickSort(arr))
// console.log(bubbleSort(arr))
// console.log(selectedSort(arr))
// console.log(cycleSort(arr))

// const cycleSort2 = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//         let position = i;

//         for(let j = i+1; j < arr.length; j++) {
//             if(arr[j] < value) {
//                 position++; //Ищем позицию, в которой данный элемент будет рядом с ближайшим большим
//             }
//         }

//         if(position === i) { //Если элемент так и остается на месте, то переходим к следующей итерации
//             continue;
//         }

//         while(arr[i] === arr[position]) { //Пропуск дубликатов
//             position++
//         }

//         [arr[i], arr[position]] = [arr[position], arr[i]] //Замена местами

//         while(position !== i) {
//             position = i;
//             for(let k = i+1; k < arr.length; k++) {
//                 if(arr[k] < arr[position]) {
//                     position++
//                 }
//             }
//         }
//     }
// }

// console.log(cycleSort2(arr))


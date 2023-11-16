const bubbleSort = (arr: number[]):number[] => {
  for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j< arr.length; j++) {
          if(arr[i] < arr[j]) {
              [arr[i], arr[j]] = [arr[j], arr[i]]
          }
      }
  }
  return arr;
}

const arr1: number[] = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000))

console.time('Bubble sort:')
console.log(bubbleSort(arr1))
console.timeEnd('Bubble sort:')

onmessage = (e) => [
  postMessage( bubbleSort(arr1) )
]
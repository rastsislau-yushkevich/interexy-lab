const arr = Array.from({ length: 100000 }, () => Math.floor(Number(Math.random()) * 100000))

const binarySearch = (arr, target) => {
  arr.sort((a, b) => a - b);
  let low = 0;
  let high = arr.length - 1;
  let counter = 0;

  while(low <= high) {
    let mid = Math.floor((low + high)/2);
    if (target === arr[mid]) {
      console.log('counter: ', counter)
      return mid
    }
    if (target < arr[mid]) {
      high = mid - 1;
    }
    if (target > arr[mid]) {
      low = mid + 1
    }
    counter++
  }
  console.log(counter)
  return 'No such value'
}

//остортированный массив делится на половины. Если искомое значение равно середине, то поиск прекращается. Если значение меньше, то значение верхнего края массива становится значением цетра -1. Если значение больше цетрального значения, то значение нижнего края массива становится равным середине +1. В результате куски массива постоянно делятся на 2 до момента, пока не останется 1 элемент

console.log(binarySearch(arr, 11221))
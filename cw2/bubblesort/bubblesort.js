const arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))

const splitted = (arr, i, j) => {
  do{
    if(arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    j++
  } while(j % 100 !== 0)
}

const bubbleSortSplitted = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let j = 0;
    console.log(i)
    splitted(arr, i, j);
    console.log(j % arr.length !== 0 && j !== 0)
    if(j % arr.length !== 0 || j == 0) {
      setTimeout(() => splitted(arr, i, j))
    } else {
      break
    }
  }
  return arr
}

console.log('Timeouted: ', bubbleSortSplitted(arr));


import { getCharacters, getCharactersPromises } from "rickAndMorty";

//Request Animation Frame
const rafed = document.getElementById('rafed');

let distance: number = 450;
let duration: number = 3000;
let startTime: number = 0;
let endTime: number = 0;

// const arr: number[] = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
// bubbleSort(arr)
const sortResult: HTMLElement | null = document.getElementById('sort-result');
const sortWorker: Worker = new Worker('sortWorker.js');

(async function() {
  const characters = await getCharactersPromises();
  console.log(characters)
})()

if(window.Worker) {
  sortWorker.postMessage(['some', 'data']);
  sortWorker.onmessage = (e) => {
    if(sortResult) {
      sortResult.textContent = e.data
    }
  }
} else {
  console.log('No worker')
}

const animationLeft = (time: number): void => {
  if(!endTime) {
    endTime = time
  }

  let progress = (time-endTime) / duration;

  let translate = progress * distance;

  if(rafed) {
    rafed.style.transform = `translateX(${distance - translate}px)`
  }

  if(progress < 1) {
    requestAnimationFrame(animationLeft)
  }

  if(progress >= 1) {
    startTime = 0
    requestAnimationFrame(animationRight)
  }
}

const animationRight = (time: number): void => {
  if(!startTime) {
    startTime = time
  }

  let progress = (time-startTime) / duration;

  let translate = progress * distance;

  if(rafed) {
    rafed.style.transform = `translateX(${translate}px)`
  }

  if(progress < 1) {
    requestAnimationFrame(animationRight)
  }

  if(progress >= 1) {
    endTime = 0
    requestAnimationFrame(animationLeft)
  }
}

window.requestAnimationFrame(animationRight)

// Transition

const transitioned: HTMLElement | null = document.getElementById('transitioned');

window.onload = () => transitioned ? transitioned.classList.replace('state-one', 'state-two') : ''

if(transitioned) {
  transitioned.addEventListener('transitionend', () => {
    if(transitioned.classList.contains('state-two')) {
      transitioned.classList.replace('state-two', 'state-one')
    } else {
      transitioned.classList.replace('state-one', 'state-two')
    }
  })
}

// Set Interval

const interval: HTMLElement | null = document.getElementById('interval');

const animateSetInterval = (): void => {
  let distance = 450;
  let duration = 3000;
  let iterations = 60;

  let direction = true;

  let translate = 0;

  setInterval(() => {
    if(direction) {
      translate += distance / iterations;
      if(interval) {
        interval.style.transform = `translateX(${translate}px)`
      }
  
      if(translate >= distance) {
        direction = false
      }
    }
  
    if(!direction) {
      translate -= distance / iterations;
      if(interval) {
        interval.style.transform = `translateX(${translate}px)`
      }
  
      if(translate <= 0) {
        direction = true
      }
    }
  }, duration / iterations)
}

animateSetInterval()

const animateSetTimeout = (): void => {
  const timeout: HTMLElement | null = document.getElementById('timeout');

  let distance: number = 450;
  let duration: number = 3000;
  let iterations: number = 60;

  let direction: boolean = true;

  let translate: number = 0;

  const moveBlock = () => {
    setTimeout(() => {
      if(direction) {
        translate += distance / iterations;
  
        if(timeout) {
          timeout.style.transform = `translateX(${translate}px)`
        }
  
        if(translate <= distance) {
          moveBlock()
        }
  
        if(translate >= distance) {
          direction = false
        }
      }
      if(!direction) {
        translate -= distance / iterations;
  
        if(timeout) {
          timeout.style.transform = `translateX(${translate}px)`
        }
        
        if(translate >= 0) {
          moveBlock()
        }

        if(translate <= 0) {
          direction = true
        }
      }
    }, duration / iterations)
  }
  moveBlock()
}
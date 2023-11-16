//Request Animation Frame

const rafed = document.getElementById('rafed');

let distance = 450;
let duration = 3000;
let startTime = null;
let endTime = null;

const arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))

// bubbleSort(arr)
const sortResult = document.getElementById('sort-result')
const sortWorker = new Worker('sortWorker.js');

if(window.Worker) {
  sortWorker.postMessage(['some', 'data']);
  sortWorker.onmessage = (e) => {
    sortResult.textContent = e.data
  }
} else {
  console.log('No worker')
}

const animationLeft = (time) => {
  if(!endTime) {
    endTime = time
  }

  let progress = (time-endTime) / duration;

  let translate = progress * distance;

  rafed.style.transform = `translateX(${distance - translate}px)`

  if(progress < 1) {
    requestAnimationFrame(animationLeft)
  }

  if(progress >= 1) {
    startTime = null
    requestAnimationFrame(animationRight)
  }
}

const animationRight = (time) => {
  if(!startTime) {
    startTime = time
  }

  let progress = (time-startTime) / duration;

  let translate = progress * distance;

  rafed.style.transform = `translateX(${translate}px)`

  if(progress < 1) {
    requestAnimationFrame(animationRight)
  }

  if(progress >= 1) {
    endTime = null
    requestAnimationFrame(animationLeft)
  }
}

window.requestAnimationFrame(animationRight)

// Transition

const transitioned = document.getElementById('transitioned');

window.onload = () => transitioned.classList.replace('state-one', 'state-two')

transitioned.addEventListener('transitionend', () => {
  if(transitioned.classList.contains('state-two')) {
    transitioned.classList.replace('state-two', 'state-one')
  } else {
    transitioned.classList.replace('state-one', 'state-two')
  }
})

// Set Interval

const interval = document.getElementById('interval')

const animateSetInterval = () => {
  let distance = 450;
  let duration = 3000;
  let iterations = 60;

  let direction = true;

  let translate = 0;

  setInterval(() => {
    if(direction) {
      translate += distance / iterations;
      interval.style.transform = `translateX(${translate}px)`
  
      if(translate >= distance) {
        direction = false
      }
    }
  
    if(!direction) {
      translate -= distance / iterations;
      interval.style.transform = `translateX(${translate}px)`
  
      if(translate <= 0) {
        direction = true
      }
    }
  }, duration / iterations)
}

animateSetInterval()

const animateSetTimeout = () => {
  const timeout = document.getElementById('timeout');

  let distance = 450;
  let duration = 3000;
  let iterations = 60;

  let direction = true;

  let translate = 0;

  const moveBlock = () => {
    setTimeout(() => {
      if(direction) {
        translate += distance / iterations;
  
        timeout.style.transform = `translateX(${translate}px)`
  
        if(translate <= distance) {
          moveBlock()
        }
  
        if(translate >= distance) {
          direction = false
        }
      }
      if(!direction) {
        translate -= distance / iterations;
  
        timeout.style.transform = `translateX(${translate}px)`
        
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
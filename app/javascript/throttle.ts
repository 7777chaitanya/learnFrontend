// TODO: rename to ts file

// TODO: Write proper tests. Didn't write now because it needs async testing as I have to introduce delay

export function throttle(func, delay) {
  let shouldWait = false;
  let waitingArgs = null;
  return function (...args) {
    if (!shouldWait) {
      func(...args);
      shouldWait = true;
      function handleWaitingArgsAndResetTimer(){
        setTimeout(() => {
            if(waitingArgs){
                func(...waitingArgs)
                waitingArgs = null;
                handleWaitingArgsAndResetTimer()
            }
            else{
                shouldWait = false;
    
            }
          }, delay);
      }
      handleWaitingArgsAndResetTimer()

    }
    else{
        waitingArgs = args;
    }
  };
}


// TODO: remove these lines after writing proper tests

function count(input){
    console.log(input)
}

const throttledCount = throttle(count, 1000)

// testing

throttledCount(1) // 0th second
throttledCount(2)

throttledCount(3)
throttledCount(4)
throttledCount(5) // 1st second
setTimeout(()=>{
    throttledCount(6)
    throttledCount(7)
    
    throttledCount(8)
    throttledCount(9)
    throttledCount(10) // 2nd second
},1000)






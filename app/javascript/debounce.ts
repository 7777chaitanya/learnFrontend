// TODO: Write proper tests. Didn't write now because it needs async testing as I have to introduce delay


export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}


// TODO: remove these lines after writing proper tests
function count(input) {
  console.log(input);
}

const debouncedCount = debounce(count, 1000);
debouncedCount(1);
debouncedCount(2);

debouncedCount(3);

debouncedCount(4);
debouncedCount(5);

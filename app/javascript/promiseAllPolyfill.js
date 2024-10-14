let promiseA = new Promise((res, rej) => {
  setTimeout(() => {
    res("promiseA");
  }, 1000);
});

let promiseB = new Promise((res, rej) => {
  rej("promiseB");
});

let myAll = function (allPromises) {
  let resolvedValues = new Array(allPromises.length);
  let resolvedCount = 0;
  return new Promise((res, rej) => {
    allPromises.forEach((each, index) => {
      each
        .then((result) => {
          resolvedValues[index] = result;
          resolvedCount++;
          if (resolvedCount == allPromises.length) {
            res(resolvedValues);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
};

// we need to attach this to the Promise constructor function itself and not onto the Promise.prototype
// because this is a static method
Promise.myAll = myAll;

// original Promise all test

let promiseAll = Promise.myAll([promiseA, promiseB])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


// TODO: It would be cool to implement this on my own Promise polyfill itself
// TODO: write test cases
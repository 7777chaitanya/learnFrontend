
// Native javascript implementation starts here
// const promise = new Promise((res, rej) => {
//   console.log("original promise block")
//   res("hello");
// })
//   .then((result) => {
//     console.log("original promise")
//     return result
//   })
//   .catch((e) => console.error(e));

// console.log("after original promise")

// My Promise implementation starts here

const PROMISE_STATES = {
  pending: "PENDING",
  fulfilled: "FULFILLED",
  rejected: "REJECTED",
};

function MyPromise(executor) {
  this.resolvedValue = null;
  this.rejectedValue = null;
  this.promiseState = PROMISE_STATES.pending;
  const resolve = (resolveWith) => {
    this.resolvedValue = resolveWith;
    this.promiseState = PROMISE_STATES.fulfilled;
  };
  const reject = (rejectWith) => {
    this.rejectedValue = rejectWith;
    this.promiseState = PROMISE_STATES.rejected;
  };

  this.then = function (cb) {
    if (this.promiseState == PROMISE_STATES.fulfilled) {
      let thenCallbackReturnValue = cb(this.resolvedValue);
      return new Promise((res, rej) => {
        res(thenCallbackReturnValue);
      });
    } else {
      return new Promise((res, rej) => {
        rej(this.rejectedValue);
      });
    }
  };

  this.catch = function (cb) {
    if (this.promiseState == PROMISE_STATES.rejected) {
      let catchCallbackReturnValue = cb(this.rejectedValue);
      return new Promise((res, rej) => {
        rej(catchCallbackReturnValue);
      });
    } else {
      return new Promise((res, rej) => {
        res(this.rejectedValue);
      });
    }
  };

  this.finally = function (cb) {
    cb();
  };

  executor(resolve, reject);
  return this;
}

const myPromise = new MyPromise((res, rej) => {
  console.log("Executor function");
  res("returned from executor");
})
  .then((result) => {
    console.log(result);
    return "1st then";
  })
  .then((result) => {
    console.log(result);
    return "2nd then";
  })
  .then((result) => {
    console.log(result);
    return "3rd then";
  })
  .catch((error) => {
    console.log("Error log", error);
    return error;
  })
  .finally(() => {
    console.log("finally");
  });

console.log("after promise");

// TODO: 
// Only the executor function should execute synchronously. The following then and catch blocks shouldn't execute syncronously.


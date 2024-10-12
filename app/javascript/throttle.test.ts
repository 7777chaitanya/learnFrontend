import { expect, test } from "vitest";
import { throttle } from "./throttle";

test("function should throttle", () => {
  let counter = 0;
  function count(input) {
    counter = input;
  }
  const DELAY = 1000;

  const throttledCount = throttle(count, DELAY);

  function getCounter(input) {
    throttledCount(input);
    return counter;
  }
  

  expect(getCounter(1)).toBe(1);
  expect(getCounter(2)).toBe(1);
  expect(getCounter(3)).toBe(1);
  expect(getCounter(4)).toBe(1);
  expect(getCounter(5)).toBe(1);
  setTimeout(() => {
    expect(getCounter(6)).toBe(5);
    expect(getCounter(7)).toBe(5);
    expect(getCounter(8)).toBe(5);
    expect(getCounter(9)).toBe(5);
    expect(getCounter(10)).toBe(10);
  }, DELAY);
});

import { useState } from "react";

export const useCounter = (initiaValue = 100) => {
  const [count, setCount] = useState(initiaValue);

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  return [count, inc, dec];
};

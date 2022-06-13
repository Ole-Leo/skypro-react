const min = 0;
const max = 10;

const increment = (state, setState, num) => {
  if (state !== num) setState((prevState) => prevState + 1);
};

const decrement = (state, setState, num) => {
  if (state !== num) setState((prevState) => prevState - 1);
};

export { increment, decrement, min, max };

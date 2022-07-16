const randomColor = () => '#' + Math.random().toString(16).substring(2, 8);

const newArr = (num) => {
  return Array.from({ length: num }, randomColor);
};

export { newArr };

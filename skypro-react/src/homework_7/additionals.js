const fillArrayWithNumbers = num => {
  const arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

const isOdd = num => num % 2 !== 0;

const isSimple = num => {
  if (num === 1 || num === 0) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};

export { fillArrayWithNumbers, isOdd, isSimple };

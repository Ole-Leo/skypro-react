const fillArrayWithNumbers = (num) => {
  const arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

const isOdd = (num) => num % 2 !== 0;

const isSimple = (num) => {
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

const numberStyle = (num) => {
  if (isSimple(num)) {
    return {
      backgroundColor: '#ff6b6b',
    };
  }
  if (isOdd(num)) {
    return {
      backgroundColor: '#fcc419',
    };
  }
};

export { fillArrayWithNumbers, numberStyle };

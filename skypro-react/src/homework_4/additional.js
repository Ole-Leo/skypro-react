const minute = (minutesQuantity, interval = 100) => {
  return ('0' + Math.floor((minutesQuantity / interval / 60) % 60)).slice(-2);
};

const second = (secondsQuantity, interval = 100) => {
  return ('0' + Math.floor((secondsQuantity / interval) % 60)).slice(-2);
};

const millisecond = (millisecondsQuantity, interval = 100) => {
  return ('0' + millisecondsQuantity / interval).slice(-2);
};

export { millisecond, second, minute };

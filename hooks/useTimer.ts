let interval: NodeJS.Timeout | undefined;

export function setTimer(callBack: () => void) {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    callBack();
  }, 1000);
}

export function stopTimer() {
  interval && clearInterval(interval);
}

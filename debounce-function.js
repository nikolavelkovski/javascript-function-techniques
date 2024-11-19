function debounce(func, delay) {
  let timeOutId;

  return (...args) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

//Test

const writeConsoleLog = (message) => console.log(message);
const debounceLog = debounce(writeConsoleLog, 2000);

console.log(debounceLog.toString());

debounceLog("hello");

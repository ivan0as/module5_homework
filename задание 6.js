let arr = [2,2,2,2,2];
let same = true;
for (let i = 1; i < arr.length; i++) {
  if (typeof +arr[i] == 'number' && !isNaN(arr[i])) {
    if (+arr[i] != +arr[0]) {
      same = false;
      break;
    }
  }
}

console.log(same);
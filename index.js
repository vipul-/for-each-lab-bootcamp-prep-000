function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(index + ": " + element);
  });
}

function iterate(callback) {
  var arr = ["momo", "pizza", "burger", "sandwitch", "hotdog"];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}

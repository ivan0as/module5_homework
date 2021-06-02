let arr = [1,2,3,4,7];
console.log("Количество элементов в массиве = "+arr.length);
let result = arr.map(function(item, index, array) {

  return console.log("Элемент №" + (index+1) + "= " + item);

});
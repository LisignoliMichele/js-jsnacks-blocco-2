var arr1 = [5, 26, 38, 99, 23, 45];
var arr2 = [5, 92, 30, 42, 56, 83, 71, 22, 34, 55];

while (arr1.lenght !== arr2.lenght){
  if (arr1.lenght <  arr2.lenght){
  var numberRandom = Math.floor(Math.random() * 100);
  arr1.push(numberRandom);
  }else if (arr1.lenght >  arr2.lenght){
    var numberRandom = Math.floor(Math.random() * 100);
    arr2.push(numberRandom);
  }else {
    alert("gli array hanno la stessa lunghezza")
  }
}
console.log(arr1, arr2)

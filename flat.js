const arr = [1, 2, [3, 4,[ 5,[34,45,[12,77]], 6]]];
const newArr = [];
let counter = 0
const flatArr = (arry, d ) =>{

  for(var i = 0; i < arry.length; i++ ){
    if(Array.isArray(arry[i]) && counter < d){
    	counter++;
      flatArr(arry[i], d)
    }else{
    newArr.push(arry[i])
    }
  }
  return newArr;
}

console.log(flatArr(arr, 4));
console.log(arr.flat(Infinity))

// Implement Insertion Sort

// let arr = [9, 2, 8, 5, 6]
// [2, 9, 8, 5, 6]
// [2, 8, 9, 5, 6]
// [2, 5, 8, 9, 6]
// [2, 5, 6, 8, 9]
// arr.splice(1, 1, 4)
// console.log(arr);


function insertionSort(list) {
  // your code here
  for(let i = 1; i < list.length; i++){
    let temp = list[i];
    for(let j = 0; j < list.length; j++){
      if(temp < list[j]){
          list.splice(i, 1);
          list.splice(j, 0, temp);
          break;
        }
      }
  }
}

module.exports = {
  insertionSort
};

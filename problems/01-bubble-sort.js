// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}
let arr = [2, 8, 1, 4, 5]


function bubbleSort(array) {
  // your code here
  let swapped = true;

  while (swapped){
    swapped = false;
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i + 1]){
        console.log(array);
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  }
}
bubbleSort(arr);

module.exports = {
  bubbleSort,
  swap
};

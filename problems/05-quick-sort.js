// Implement Quick Sort

function quickSort(array) {
  // your code here
  if(array.length <= 1){
    return array;
  }

  let pivot = array.shift();     //find the first element of the array , set it as pivot
  let left = array.filter(el => el < pivot); // put all values less than the pivot value into an array called left
  let right = array.filter(el => el >= pivot); //put all values greater than the pivot value into an array called right

  let leftSorted = quickSort(left); //call quickSort function on left and assign the return value to leftSorted
  let rightSorted = quickSort(right); //call quicksSort function on right and assign the return value to rightSorted

  return [...leftSorted, pivot, ...rightSorted];
}


module.exports = {
  quickSort
};

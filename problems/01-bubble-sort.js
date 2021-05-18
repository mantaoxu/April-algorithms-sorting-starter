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
    let count = 0;

    while (swapped) {
        count++;
        // console.log(count);
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                // console.log(array);
                swapped = true;
            }
        }
    }
    return array;
}
bubbleSort(arr);

module.exports = {
    bubbleSort,
    swap
};
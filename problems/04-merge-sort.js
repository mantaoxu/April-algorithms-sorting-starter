// Implement Merge Sort

let arr1 = [3, 6, 8, 11];
let arr2 = [1, 4, 7, 9]
    // [9, 4][10, 7]
    // [9][4] || [10][7]
    // [4, 9] || [7, 10]
    // [4, 7, 9, 10]




function merge(array1, array2) {
    // your code here
    let newArr = [];

    while (array1.length || array2.length) {
        console.log(array1[0], array2[0])
        if (array1[0] < array2[0]) {
            newArr.push(array1.shift());
            newArr.push(array2.shift());
        } else {
            newArr.push(array2.shift());
            newArr.push(array1.shift());
        }

    }
    // console.log(newArr);
    return newArr;
}

console.log(merge(arr1, arr2));



function mergeSort(array) {
    // your code here
}

module.exports = {
    merge,
    mergeSort
};
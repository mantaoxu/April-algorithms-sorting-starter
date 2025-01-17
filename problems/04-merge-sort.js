// Implement Merge Sort
// [1, 5, 10, 15], [0, 2, 3, 7, 10]
// let arr1 = [2, 3, 5, 9];
// let arr2 = [1, 4, 7, 8]
// [9, 4][10, 7]
// [9][4] || [10][7]
// [4, 9] || [7, 10]
// [4, 7, 9, 10]

function merge(array1, array2) {
    // your code here
    let newArr = [];

    while (array1.length || array2.length) {

        if (!array1.length) {
            newArr.push(array2.shift());

        } else if (!array2.length) {

            newArr.push(array1.shift());

        }
        // console.log(array1[0], array2[0])
        if (array1.length && array2.length) {
            if (array1[0] < array2[0]) {
                newArr.push(array1.shift());
            } else {
                newArr.push(array2.shift());
            }
        }
    }
    return newArr;
}

console.log(merge([1, 5, 10, 15], [0, 2, 3, 7, 10]));



// [1, 2, 3, 4]
// [1, 2][3, 4]
// [1][2][3][4]

function mergeSort(array) {
    // your code here
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let leftSide = array.slice(0, mid);
    let rightSide = array.slice(mid);
    let sortedLeft = mergeSort(leftSide);
    let sortedRight = mergeSort(rightSide);

    return merge(sortedLeft, sortedRight);
}


module.exports = {
    merge,
    mergeSort
};
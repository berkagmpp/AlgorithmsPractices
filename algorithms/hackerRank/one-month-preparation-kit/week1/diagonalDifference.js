// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
// [11, 2, 4]
// [4, 5, 6]
// [10, 8, -12]
// 11 + 5 + -12 = 4
// 4 + 5 + 10 = 19
// |4 - 19| = 15
// output: 15


function diagonalDifference(arr) {
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0, j = arr[0].length - 1; i < arr[0].length, j >= 0; i++, j--) {
        firstSum += arr[i][i];
        secondSum += arr[i][j];
    }
    return Math.abs(firstSum-secondSum);
}

console.log(diagonalDifference(arr));
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
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0, j = arr.length-1; i < arr.length, j > -1; i++, j--) {
        sum1 += arr[i][i];
        sum2 += arr[i][j];
        // console.log('sum1: ' + sum1);
        // console.log('sum2: ' + sum2);
    }
    // let sum1 = arr[0][0] + arr[1][1] + arr[2][2];
    // let sum2 = arr[0][2] + arr[1][1] + arr[2][0];
    let sum = Math.abs(sum1-sum2);
    return sum;
    // return [sum1, sum2];
}

console.log(diagonalDifference(arr));
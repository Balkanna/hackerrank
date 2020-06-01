/*https://www.hackerrank.com/challenges/diagonal-difference/problem */

function diagonalDifference(arr) {
    let n = arr.length;
    let diagonal1 = 0;
    let diagonal2 = 0;

    arr.forEach((item, i) => {
        arr.forEach((item, j) => {
            if(i === j) { 
                diagonal1 += arr[i][j];
            }
            if(i + j === n - 1){
                diagonal2 += arr[i][j];
            }
        });
    });
    return Math.abs(diagonal1 - diagonal2);
}
/*https://www.hackerrank.com/challenges/a-very-big-sum/problem
*/

function veryBigSum(ar) {
    return ar.reduce((sum, currentValue) => sum + currentValue, 0)
}
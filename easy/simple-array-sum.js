/*https://www.hackerrank.com/challenges/simple-array-sum/problem*/

function simpleArraySum(arr) {
    return arr.reduce((sum, current) => sum + current, 0)
}
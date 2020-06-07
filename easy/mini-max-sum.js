/*https://www.hackerrank.com/challenges/mini-max-sum/problem*/

function miniMaxSum(arr) {
    const sortedArr = arr.sort();
    let sum = sortedArr.reduce((sum, item) => {
        return sum + item;
    }, 0);
    
    console.log((sum - sortedArr[4]) + ' ' + (sum - sortedArr[0]));
}
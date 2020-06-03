/*https://www.hackerrank.com/challenges/plus-minus/problem*/

function plusMinus(arr) {
    let positive = 0,
        negative = 0,
        zero = 0;

    arr.map( item => {
        item === 0 ? zero++ : (item > 0 ? positive++ : negative++)
    });

    let positiveFraction = (positive / arr.length).toFixed(6),
        negativeFraction = (negative / arr.length).toFixed(6),
        zeroFraction = (zero / arr.length).toFixed(6);

    console.log(positiveFraction);
    console.log(negativeFraction);
    console.log(zeroFraction);
}
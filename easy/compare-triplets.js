/*https://www.hackerrank.com/challenges/compare-the-triplets/problem*/

function compareTriplets(a, b) {
    let arrayAlice = 0;
    let arrayBob = 0;

    for (let i=0; i < a.length; i++){
        if (a[i] === b[i]) {
        
        } else {
            a[i] > b[i] ? arrayAlice++ : arrayBob++;
        }
    }
    return [arrayAlice, arrayBob];
}

function compareTriplets(a, b) {
    let arrayAlice = 0;
    let arrayBob = 0;

    a.forEach( (item, i) => {
        if (item === b[i]) {
            return;
        } else {
            item > b[i] ? arrayAlice++ : arrayBob++;
        }
    });
    return [arrayAlice, arrayBob];
}

let arrayAlice = [5,6,7];
let arrayBob = [3,6,10];

compareTriplets(arrayAlice, arrayBob);
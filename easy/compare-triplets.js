/*https://www.hackerrank.com/challenges/compare-the-triplets/problem*/

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
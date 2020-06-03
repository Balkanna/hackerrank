/*https://www.hackerrank.com/challenges/staircase/problem*/

//Solution ¹1

function staircase(n) {
    let num = parseInt(n);
 
    for (let i = 0; i < num; i++) {
        let s = "";
        for (let j = 0; j < num; j++) {
            (num - i - 2 < j) ? s += "#" : s += " ";  
        }
        console.log(s);
    }
}

//Solution ¹2

function staircase(n) {
    [...Array(n)].map(
        (x, i) => [...Array(n)].map(
            (y, j) => j < n - 1 - i ? " " : "#"
        )
    ).map(x => console.log(x.join(''))); 
}



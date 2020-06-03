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

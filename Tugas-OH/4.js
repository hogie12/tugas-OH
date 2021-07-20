function xMasTree(n){
    let pagar = 1;
    let dash = (n * 2 - 2) ;
    let result = [];
    for (let i = 0; i < n; i++){
       let x = '_'.repeat(dash / 2) + '#'.repeat(pagar) + '_'.repeat(dash / 2);
        result.push(x);
        pagar += 2;
        dash -= 2;
    }
    result.push(result[0]);
    result.push(result[0]);
    return result;
}
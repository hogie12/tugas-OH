function solve(a,b){
    let count = b.map(nilai => a.filter(nilaia => nilaia === nilai).length)
    return count;
}
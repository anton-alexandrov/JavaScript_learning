//condition ? exprIfTrue : exprIfFalse
// condition ? ifTrue 
// : next condition ? ifTrue 
// : ifFalse

function bestSolution(n){
    return 
    n > 13 ? n - 2 
    : n > 0 ? n - 1 
    : n;
}

console.log(bestSolution(1))
console.log(bestSolution(5))
console.log(bestSolution(15))
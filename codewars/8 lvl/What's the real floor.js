//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

//With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
//ternary if

function getRealFloor(n) {

    if (n<=0){
        return n;
    } else if (n<=12){
        return n-1
    } else {
        return n-2;
    }
}

function bestSolution(n){
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

console.log(getRealFloor(1))
console.log(getRealFloor(5))
console.log(getRealFloor(15))

console.log(bestSolution(1))
console.log(bestSolution(5))
console.log(bestSolution(15))
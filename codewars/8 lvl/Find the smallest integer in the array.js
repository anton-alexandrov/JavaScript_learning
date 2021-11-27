/* 
https://www.codewars.com/kata/55a2d7ebe362935a210000b2
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
 */

//basic problem: find min/max in array

function findSmallestInt(args) {
    let arr = Array.from(args);
    let n = Number.MAX_SAFE_INTEGER;
    for (i = 0; i < arr.length; i++) {
        if (n>=arr[i]){
            n=arr[i];
        }
    }
    return n;
}

console.log(findSmallestInt([78, 56, 232, -12, -88]));
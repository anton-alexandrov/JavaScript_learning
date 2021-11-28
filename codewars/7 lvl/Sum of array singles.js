/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
*/

//find if element unique or not
//if not, move forward
//if yes, sum

//basic problem: if element presents more than once in array

function repeats(arr){
    let sum=0;
    let dups=[];
    for (i=0; i<arr.length;i++){
        let new_arr=arr.slice(i+1, arr.length);
        if (new_arr.includes(arr[i])||dups.includes(arr[i])){
            dups.push(arr[i]);
            continue
        } else{
            sum+=arr[i]
        }
    }
    return sum;
    };

console.log(repeats([5, 10, 19, 13, 10, 13]));
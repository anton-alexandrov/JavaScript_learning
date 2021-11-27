let array = [-10, 10.3, -10, 10];
let max_element = Number.MIN_SAFE_INTEGER;
let min_element = Number.MAX_SAFE_INTEGER;

for (i = 0; i < array.length; i++) {
    if (array[i] < min_element){
        min_element=array[i]
    }
    else if(array[i]>max_element){
        max_element=array[i]
    }
}

console.log("Min element is: "+ min_element);
console.log("Max element is: "+ max_element);
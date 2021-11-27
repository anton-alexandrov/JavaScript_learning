let name="John"
let lastName="Doe"

console.log(name);
console.log(lastName);

console.log(name+" "+lastName);
console.log("Customer name is: " + name );
console.log("Customer name is: " + name + " and lastname is: "+lastName);
console.log("Customer name %s is and lastname is %s", name, lastName);

let age = 42;
console.log("Customer name %s is and lastname is %s. The age is: %i", name, lastName, age);

console.log(`Customer name ${name} is and lastname is ${lastName}. The age is: ${age}`);

console.log("String length: " + lastName.length);
console.log("First symbol: " + lastName[0]);

//convert number to string
let n = 365;
let str_n=""+n;
console.log(`Type of ${str_n} is ${typeof(str_n)}`);

//opt.2
let n2=456;
let str_n2=String(n2);
console.log(`Type of ${str_n2} is ${typeof(str_n2)}`);

//convert String to number
let str_n3="678";
let n3=Number(str_n3);
console.log(`Type of ${n3} is ${typeof(n3)}`);
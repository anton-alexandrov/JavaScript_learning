//opt.1
let n=191;
let str_n=String(n);
let sum = 0;

for (i=0; i<str_n.length; i++){
   sum+=Number(str_n[i]);
}

console.log(`Summa opt.1 of the digits ${n} is ${sum}`);


//opt.2 
let res=n;
let sum2=0;

while(res>0){
   sum2+=Math.floor(res%10);
   res=Math.floor(res/10);
}

console.log(`Summa opt.2 of the digits ${n} is ${sum2}`);

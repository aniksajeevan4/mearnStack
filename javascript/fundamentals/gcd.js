var num=24;num2=8;
let res=0;
for(i=1;i<=num;i++){
if (num % i == 0 && num2 % i == 0) {
    res = i;
 }
}
console.log(res);
var num=12001,rem="";
while(num!=0){
    let last_digit=num%10;
    rem+=last_digit
    num=Math.floor(num/10);
}
console.log(rem);

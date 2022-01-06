var num=123,res=0;
while(num!=0){
    let last=num%10;
    res+=last**3
    num=Math.floor(num/10)
}
console.log(res);
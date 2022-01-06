var i = 1, num1 = 111, num2 = 100;
let res = 0 ;
while (i <= num1 ){
   if (num1 % i == 0 && num2 % i == 0) {
      res = i;
   }
   i++;
}
console.log(res); 

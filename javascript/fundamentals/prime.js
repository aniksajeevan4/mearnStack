var num = 25, flag = 0;
for (i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = 1;
        break
    }
}
console.log(flag == 0 ? "prime number" : " not prime number");

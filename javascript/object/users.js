var users = {
    1000: { accno: 1000, personName: "ram", balance: 5000, password: "userone" ,transactions:{
        creditTransactions:[],debitTransactions:[]
    }},
    1001: { accno: 1001, personName: "ravi", balance: 7000, password: "usertwo"  ,transactions:{
        creditTransactions:[],debitTransactions:[]
    }},
    1002: { accno: 1002, personName: "raju", balance: 8000, password: "userthree" ,transactions:{
        creditTransactions:[],debitTransactions:[]
    }},
    1003: { accno: 1003, personName: "vivek", balance: 15000, password: "userfour" ,transactions:{
        creditTransactions:[],debitTransactions:[] 
    }},

}
function balanceEnquiry(accno){
    if(accno in users){
        return users[accno].balance
    }
    else{
        console.log("invalid accnum");
    }

}

function validAccountNum(accno) {
    return accno in users ? true : false
}
function fundTransfer(fromAcc, toAcc, amount) {
    if (validAccountNum(fromAcc) && validAccountNum(toAcc)){
        let OldBal = users[fromAcc].balance
        if (amount > OldBal) {
            console.log("insufficient balance");
        }
        else {
            users[fromAcc].balance-=amount
            let frmAccnoBalance=balanceEnquiry(fromAcc)
            console.log(`your acno ${fromAcc} has been debited with ${amount} available bal ${frmAccnoBalance}`);
            users[toAcc].balance+=amount
            let toAccnoBalance=balanceEnquiry(toAcc)
            console.log(`your acno ${toAcc} has beem credited with ${amount} available bal ${toAccnoBalance}`);
            let creditTrans={from:fromAcc,amount:amount}
            let debitTrans={to:toAcc,amount:amount}
            users[fromAcc].transactions.creditTransactions.push(creditTrans)
            users[toAcc].transactions.debitTransactions.push(debitTrans);
            console.log(users[fromAcc].transactions.creditTransactions);
            console.log(users[toAcc].transactions.debitTransactions);

        

        }
    }
    else {
        console.log("invalid acc_num");
    }
}
fundTransfer(1001,1002,1000);




// function autheticate(acc_num,password){
// // checking acno is valid
// if(acc_num in users){
//     let pwd=users[acc_num].password
//     if(pwd==password){
//         return 1
//     }
//     else{
//         return-1
//     }}
//     else{
        // return 0
    // }
// }
// console.log(autheticate(1000,"userone"));

// 1000 details
// console.log(users[1000]);

// print balance of 1002
// console.log(users[1002].balance);

// 1005 exist or no exist
// console.log("1005" in users);
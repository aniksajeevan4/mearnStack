var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
// transation history oh 1002
var debit=accounts.find(data=>data.acno==1002).transactions
var credit=accounts.map(data=>data.transactions).flat().filter(data=>data.to==1002)
var transactionHistory={"debit Transactions": debit,"creditTransactions":credit}
console.log(transactionHistory);
// highest accnt balance
// var high=accounts.reduce((n1,n2)=>n1.balance>n2.balance?n1.balance:n2.balance)
// console.log(high);



//   credit transactions of 1002
// accounts.map(tra=>tra.transactions).flat().filter(credit=>credit.to==1002).forEach(data=>console.log(data))


//   gpay transaction detils
// accounts.map(tran=>tran.transactions).flat().filter(tran=>tran.method=="g-pay").forEach(data=>console.log(data))


//    3.accnt balan of 1000
// var balances=accounts.find(bal=>bal.acno==1000)
// console.log(balances.balance);

// 2.savings acoonts
// var savings=accounts.filter(acc=>acc.ac_type=="savings").forEach(data=>console.log(data.acno))


  //   no of accounts
//   console.log(accounts.length);

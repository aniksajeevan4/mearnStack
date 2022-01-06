class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }
    session={}

    validateAccountNumber(acno){
        return acno in this.accounts ? true:false

    }
    authenticate(acno,password){
        if(this.validateAccountNumber(acno)){
        let pwd=this.accounts[acno].password
        if(pwd==password){
            console.log("acess granted");
            this.session["user"]=acno
        }
        else{
            console.log("invalid password");
        }

        }
        else{
            console.log("invalid account number");
        }
        
    }
    getBalance(acno){
        return this.accounts[acno].balance

    }
    balanceEnquiry(){
        if("user" in this.session){
            let lolgedUser=this.session["user"]
            console.log(this.getBalance(lolgedUser));
        }
        else{
            console.log("invalid session");
        }

    }
    loginReguired(){
        return "user" in this.session ? true:false
    }
    loggedUser(){
        if(this.loginReguired()){
            return this.session["user"]
        }
    }
    fundTransfer(to_acno,amount){
            if(this.loginReguired()){
            if(this.validateAccountNumber(to_acno)){
                let loggedUser=this.session["user"]
                let curBalance=this.getBalance(loggedUser)            
                if(amount>curBalance){
                    console.log("transction declines insufficient balance");
                }
                else{
                    this.accounts[loggedUser].balance-=amount
                    let from_ac_bal=this.getBalance(loggedUser)
                    console.log(`your account has been debited with ${amount} ,your balance is ${from_ac_bal}`); 

                    this.accounts[to_acno].balance+=amount
                     let to_ac_bal=this.getBalance(to_acno)
                     console.log(`your account has been credited with ${amount} ,your balance is ${to_ac_bal}`);
                     console.log("transaction completed");

                    let creditTrans={from:loggedUser ,amount:amount}
                    let debitTrans={to_acno:to_acno,amount:amount}
                  this.accounts[loggedUser].transactions.debitTransactions.push(debitTrans)
                    this.accounts[to_acno].transactions.creditTransactions.push(creditTrans)
                }
            }
            else{
                console.log("invlid to account number");
            }
            
        }
        else{
            console.log("invalid session u must login ");
        }
    }
    getDebitTransactions(){
        let user=this.loggedUser()
        this.accounts[user].transactions.debitTransactions.forEach(t=>console.log(t))

    }
    getCreditTransactions(){
        let user=this.loggedUser()
        this.accounts[user].transactions.creditTransactions.forEach(t=>console.log(t))
        
        
    }
    getTransactionsHistory(){
        let user=this.loggedUser()
        console.log(this.accounts[user].transactions);

    }
}
var bank=new Bank()
bank.authenticate(1000,"userone")
// bank.balanceEnquiry()
// bank.getBalance(1000)
bank.fundTransfer(1001,2000)
bank.getDebitTransactions()
// bank.getCreditTransactions()
bank.getTransactionsHistory()

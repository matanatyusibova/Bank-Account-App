let bankAccount = {
    balance: 0,
    transactions: [],

    deposit: function(amount) {
        this.balance+=amount
        this.transactions.push("Deposited" + amount)
        alert("New balance:" + this.balance)
        
    },

    withdraw: function(amount) {
        if (amount<=this.balance) {
             this.balance-=amount
             this.transactions.push("Withdraw" + amount)
             alert("New balance:" + this.balance)
            
        }else {
            alert("Not enough balance")
        }
       
    },
    checkBalance: function() {
        alert(this.balance)
    },
    viewTransactionHistory: function() {
        if (this.transactions.length===0) {
            
            alert("No transactions yet")
        }else{
            let historyText = "Transaction history: \n"
            for (let i = 0; i < this.transactions.length; i++) {
               historyText+=(i+1) + ". " + this.transactions[i] + "\n"
                
            }
            alert(historyText)
        }
        
       
          
            
        }
           
        
        
       
    }
while(true){
 let action = prompt("Select operation: deposit/ withdraw/ balance/ history")

 if (action==="deposit") {
    let amount = parseFloat (prompt("Enter the amount to deposit"))
    bankAccount.deposit(amount)
    
 }else if(action==="withdraw") {
    let amount = parseFloat(prompt("Enter the amount to withdraw"))
    bankAccount.withdraw(amount)

 }else if (action==="balance") {
    bankAccount.checkBalance()
 }else if (action==="history"){
    bankAccount.viewTransactionHistory()


 }else {
    alert ("Invalid selection")
 }
}
    
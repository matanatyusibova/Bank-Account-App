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
        alert(this.balanc)
    },
    viewTransactionHistory: function() {
        alert("Transaction history")
        this.transactions.forEach(function (transaction, index) {
            alert((index+1) + ". " + transaction)
            
        })
    }
}
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
    
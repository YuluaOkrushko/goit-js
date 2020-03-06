const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    let transaction = {
      id: this.transactions.length + 1,
      type: type,
      amount: amount
    };
    return transaction;
  },

  deposit(amount) {
    let transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance = amount + this.balance;
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      let transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance = this.balance - amount;
    } else {
      console.log("Cнятие такой суммы невозможно, недостаточно средств!");
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) {
        return item;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        total += item.amount;
      }
    }
    return total;
  }
};

account.deposit(100);
account.deposit(20);
account.withdraw(40);

console.log(account.getTransactionDetails(3));
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// Create a Banking System
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    // Method to get the current balance
    getBalance(): number {
        return this.balance;
    }

    // Protected method to allow subclasses to modify the balance
    protected updateBalance(amount: number): void {
        this.balance += amount;
    }
}

// class: SavingsAccount
class SavingsAccount extends BankAccount {
    // Method to add interest to balance
    addInterest(rate: number): void {
        const interest = this.getBalance() * (rate / 100);
        this.updateBalance(interest);
        console.log(`Interest added: $${interest.toFixed(2)}`);
    }
}

// Create a savings account with $1000
const myAccount = new SavingsAccount(1000);

// Print current balance
console.log("Initial Balance:", myAccount.getBalance()); // 1000

// Add 5% interest
myAccount.addInterest(5);

// Print new balance
console.log("Balance after interest:", myAccount.getBalance());


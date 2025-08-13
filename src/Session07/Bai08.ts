class Account {
    public accountNumber: number;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: number, balance: number, status: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.status = status;
        this.history = [];
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp ${amount} vào tài khoản. Số dư hiện tại: ${this.balance}`);
        } else {
            console.log("Số tiền nạp không hợp lệ");
        }
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút ${amount} khỏi tài khoản. Số dư hiện tại: ${this.balance}`);
        } else {
            console.log("Số tiền rút không hợp lệ");
        }
    }
    showHistory(): void {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach((h) => console.log(h));
    }
}
class SavingAccount extends Account {
    interestRate: number;
    constructor(accountNumber: number, balance: number, status: string, interestRate: number) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }
    withdraw(amount: number): void {
        if (amount > 0 && this.balance > 0) {
            if (amount >= this.balance) {
                this.history.push(`Rút ${this.balance} (toàn bộ số dư)`);
                this.balance = 0;
            } else {
                this.balance -= amount;
                this.history.push(`Rút ${amount}. Số dư hiện tại: ${this.balance}`);
            }
        } else {
            console.log("Không thể rút");
        }
    }
}
class CheckingAccount extends Account {
    overdraftLimit: number;
    constructor(accountNumber: number, balance: number, status: string, overdraftLimit: number) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount: number): void {
        if (amount > 0 && this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rút ${amount}. Số dư hiện tại: ${this.balance}`);
        } else {
            console.log("Vượt quá hạn mức thấu chi");
        }
    }
}
let savingAcc = new SavingAccount(101, 5000, "active", 5);
savingAcc.deposit(2000);
savingAcc.withdraw(1000);
savingAcc.withdraw(8000); 
savingAcc.showHistory();
let checkingAcc = new CheckingAccount(202, 3000, "active", 2000);
checkingAcc.deposit(1000);
checkingAcc.withdraw(3500); 
checkingAcc.withdraw(3000); 
checkingAcc.showHistory();

class Account {
    public accountNumber: number;
    protected balance: number;
    protected history: string[];
    protected status: string;
    constructor(accountNumber: number, balance: number, status: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp ${amount} vào tài khoản. Số dư hiện tại: ${this.balance}`);
            console.log(`Nạp thành công ${amount}. Số dư mới: ${this.balance}`);
        } else {
            console.log("Số tiền nạp phải lớn hơn 0");
        }
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút ${amount} từ tài khoản. Số dư hiện tại: ${this.balance}`);
            console.log(`Rút thành công ${amount}. Số dư mới: ${this.balance}`);
        } else {
            console.log("Số tiền rút không hợp lệ hoặc vượt quá số dư");
        }
    }
    showHistory(): void {
        console.log("Lịch sử giao dịch:");
        this.history.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
class SavingAccount extends Account {
    interestRate: number;

    constructor(accountNumber: number, balance: number, status: string, interestRate: number) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
        if (amount >= this.balance) {
            this.history.push(`Rút toàn bộ số dư ${this.balance} từ tài khoản. Số dư hiện tại: 0`);
            console.log(`Rút toàn bộ ${this.balance}. Số dư hiện tại: 0`);
            this.balance = 0;
        } else if (amount > 0) {
            this.balance -= amount;
            this.history.push(`Rút ${amount} từ tài khoản. Số dư hiện tại: ${this.balance}`);
            console.log(`Rút thành công ${amount}. Số dư mới: ${this.balance}`);
        } else {
            console.log("Số tiền rút không hợp lệ");
        }
    }
}
let mySaving = new SavingAccount(1001, 5000, "active", 3.5);
mySaving.deposit(2000);
mySaving.withdraw(3000);
mySaving.withdraw(5000); 
mySaving.showHistory();

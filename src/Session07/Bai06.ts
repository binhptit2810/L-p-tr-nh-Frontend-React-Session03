class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;
    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    public getPassword(): string {
        return this.password;
    }
    public setPassword(newPass: string): void {
        this.password = newPass;
    }
    login(): void {
        if (!this.isLogin) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        } else {
            console.log("...");
        }
    }
    logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        } else {
            console.log("Bạn chưa đăng nhập");
        }
    }
}
class UserAcc extends Account {
    public status: string;
    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string, status: string) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login(): void {
        if (this.status === "active") {
            super.login();
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        } else {
            console.log("Trạng thái tài khoản không xác định");
        }
    }
}
class AdminAcc extends Account {
    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string) {
        super(id, userName, password, isLogin, role);
    }
    banUser(user: UserAcc): void {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị khóa`);
    }
}
let user1 = new UserAcc(1, "binh", "123456", false, "user", "active");
let admin1 = new AdminAcc(99, "admin", "admin123", false, "admin");

user1.login();      
admin1.banUser(user1); 
user1.login();        
user1.logout();       

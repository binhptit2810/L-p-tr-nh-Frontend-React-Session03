let firstName: string = "john";
let lastName: string = "doe";
function vietHoaChuCaiDau(chuoi: string): string {
    if (chuoi.length === 0) return chuoi;
    return chuoi.charAt(0).toUpperCase() + chuoi.slice(1);
}
firstName = vietHoaChuCaiDau(firstName);
lastName = vietHoaChuCaiDau(lastName);
let fullName: string = `${firstName} ${lastName}`;
console.log("Ho ten day du:", fullName);

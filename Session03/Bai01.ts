type NguoiDung = {
    id: number;
    ten: string;
    tuoi: number;
    diachi: string;
};
let danhSachNguoiDung: NguoiDung[] = [
    {
        id: 1,
        ten: "Nguyen Van A",
        tuoi: 20,
        diachi: "Ha Noi"
    },
    {
        id: 2,
        ten: "Tran Thi B",
        tuoi: 22,
        diachi: "Da Nang"
    }
];
danhSachNguoiDung.forEach(nguoi => {
    console.log(`ID: ${nguoi.id}, Ten: ${nguoi.ten}, Tuoi: ${nguoi.tuoi}, Dia chi: ${nguoi.diachi}`);
});

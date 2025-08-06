let phoneBooks = [];
function addContact(){
    let num = +prompt("Mời bạn nhập số liên hệ cần thêm")
    for(let i =0;i<num;i++){
        let name = prompt("Mời bạn nhập vào tên");
        let phone = prompt("Mời bạn nhập số đt")
        let email = prompt("Mời bạn nhập email")
        let contact ={
        name : name,
        phone : phone,
        email : email
    }
    phoneBooks.push(contact)
    }
    
}
function displayContact(){
    addContact();
    for(let i=0;i<phoneBooks.length;i++){
    console.log("tên ",phoneBooks[i].name)
    console.log("số đt ",phoneBooks[i].phone)
    console.log("email : ",phoneBooks[i].email)
    console.log("------------------")
}
}
displayContact()
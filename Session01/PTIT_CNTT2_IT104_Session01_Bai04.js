const checkParity = (num)=>{
    if(isNaN(num)){
        console.log("Không phải là số")
    }else{
        if(num %2 === 0){
            console.log("là số chẵn");
        }else{
            console.log("Là số lẻ")
        }
    }

}
let num;
num =prompt("Mời bạn nhập vào 1 số");
console.log(checkParity(num))
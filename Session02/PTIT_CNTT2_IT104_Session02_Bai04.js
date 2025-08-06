function checkELement(arr,num){
    let check = false;
    for(let i =0;i<arr.length;i++){
        if(arr[i] === num){
            check == true
            break
        }
    }
    if(check == true){
        console.log("true")
    }else{
        console.log("false")
    }
}
checkELement([1,2,3,4,5],6)

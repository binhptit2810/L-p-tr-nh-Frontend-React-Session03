let id : number | string
function check(id : Number|string){
    if(typeof id === "string"){
        console.log("có %d kí tự",id.length)
    }else if(typeof id === "number"){
        if(id %2 ==0){
            console.log("đây là số chẵn")
        }else{
            console.log("đây là số lẻ")
        }
    }

}
check("demo123")
check(10)
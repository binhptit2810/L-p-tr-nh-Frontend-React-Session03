function checkEndString(chuoiDai,ChuoiNgan){
    if(chuoiDai.endsWith(ChuoiNgan)){
        console.log("true")
    }else{
        console.log("false")
    }

}
checkEndString("Hello, World!","Hello")
checkEndString("Hi there!","there!")

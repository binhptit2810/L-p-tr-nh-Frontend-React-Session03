const typeConsole = (type = "log")=>{
    return `đây là type : ${type} `
}
console.log(typeConsole("log"))
console.log(typeConsole("warn"))
console.log(typeConsole("error"))
console.log(typeConsole())
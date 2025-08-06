function greetingWithWeather(name,weather){
    if(weather == "sunny"){
       return `Chào ${name} hôm nay trời nắng tuyệt vời!`
    }else if(weather == "rainy"){
       return `Chào ${name} hôm nay trời mưa hãy mang theo ô `
    }else{
        return `Chào ${name} hôm nay thời tiết không xác định `
    }
}
console.log(greetingWithWeather("Nguyễn an","sunny"))
console.log(greetingWithWeather("Lê nam ","rainy"))
console.log(greetingWithWeather("Trần Tâm","cloudy"))
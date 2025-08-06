function sum(arr) {
    let total = 0;
    for(let value of arr){
        if(value %2 ==0){
            total += value
        }
        
    }
    return total;
}
let arr = [1, 2, 3,4, 5, 6];
let result = sum(arr);
console.log(result); 

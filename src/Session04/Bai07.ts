function processInput(input: string | number | boolean) {
    if (typeof input === "string") {
        let isAllDigits = true
        let countLetters = 0;
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (char < '0' || char > '9') {
                isAllDigits = false;

                if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
                    countLetters++;
                }
            }
        }
        if (isAllDigits) {
            const num = Number(input);
            console.log(num * num);
        } else {
            console.log(`Chuỗi chứa ${countLetters} ký tự chữ cái`);
        }
    } 
    else if (typeof input === "number") {
        if (!Number.isInteger(input) || input < 2) {
            console.log(`${input} không phải là số nguyên tố`);
        } else {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(input); i++) {
                if (input % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log(`${input} là số nguyên tố`);
            } else {
                console.log(`${input} không phải là số nguyên tố`);
            }
        }
    } 
    else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        } else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
processInput("5")
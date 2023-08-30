function FizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        if(i % 15 === 0 && i != 0) {
            console.log("Fizz Buzz");
        } else if (i % 5 === 0 && i != 0) {
            console.log("Buzz");
        } else if(i % 3 === 0 && i != 0) {
            console.log("Fizz");
        } else{
            console.log(i);
        }
    }
}

FizzBuzz();
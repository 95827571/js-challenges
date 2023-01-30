let fizzBuzzResult = ""
let num = 15
if (num % 3 == 0) {
    fizzBuzzResult += "fizz"
}
if (num % 5 == 0) {
    fizzBuzzResult += "buzz"
}
if (!(num % 5 == 0 || num % 3 == 0)) {
    fizzBuzzResult = num;
}
console.log(fizzBuzzResult)
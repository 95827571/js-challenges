let results = ""
let num = 2
if (num % 3 == 0) {
    results += "fizz"
}
if (num % 5 == 0) {
    results += "buzz"
}
if (!(num % 5 == 0 || num % 3 == 0)) {
    results = "No Fizz or Buzz";
}
console.log(results)
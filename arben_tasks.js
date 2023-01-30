// // Fizz buzz
// let fizzBuzzResult = ""
// let num = 2
// if (num % 3 == 0) {
//     fizzBuzzResult += "fizz"
// }
// if (num % 5 == 0) {
//     fizzBuzzResult += "buzz"
// }
// if (!(num % 5 == 0 || num % 3 == 0)) {
//     fizzBuzzResult = "No Fizz or Buzz";
// }
// console.log(fizzBuzzResult)

// Palindrome
let stringToCheck = "0200020" 
const reversedString = stringToCheck.trim().split('').reverse().join('');
stringToCheck = stringToCheck.trim();

console.log(`Is ${stringToCheck} Palindrome: ${stringToCheck === reversedString}`)


// // Password Analysis
// const password = "Jg£Gl36@gk";
// let passwordAnalysis = false;
// let counter = 0;

// const checkPasswordLength = (password) => {
//     return password.length >= 8 && password.length <= 16;
// }

// if (checkPasswordLength(password)) {
//     passwordAnalysis = true
// } else {
//     console.log("We need a longer password!")
// }

// if(passwordAnalysis) {
//     const chars = ["!", "Â", "£", "$", "%", ".", "*"]
//     if (password.match(/[A-Z]/)) {
//         counter++;
//     }

//     if (password.match(/[a-z]/)) {
//         counter++;
//     }

//     if (password.match(/[0-9]/)) {
//         counter++;
//     }

//     for (let i = 0; i < chars.length; i++) {
//         const char = chars[i];
//         if (password.includes(char)) {
//             counter++;
//             break;
//         }
//     }

//     switch (counter) {
//         case 1:
//             console.log("This is a weak password");
//             break;
//         case 2:
//             console.log("This is a sufficient password");
//             break;
//         case 3:
//             console.log("This is a adequate password");
//             break;
//         case 4:
//             console.log("This is a strong password");
//             break;
//     }
// }
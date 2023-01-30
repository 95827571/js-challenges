let stringToCheck = "0200020" 
const reversedString = stringToCheck.trim().split('').reverse().join('');
stringToCheck = stringToCheck.trim();

console.log(`Is ${stringToCheck} Palindrome: ${stringToCheck === reversedString}`)
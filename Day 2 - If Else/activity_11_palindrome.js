let stringToCheck = "2020202"
const reversedString = stringToCheck.trim().split('').reverse().join('');
stringToCheck = stringToCheck.trim();

console.log(`Is ${stringToCheck} Palindrome: ${stringToCheck == reversedString}`)
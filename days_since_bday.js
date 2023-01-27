const personsBirthday = new Date(2002, 11, 25);
let currentDay = new Date();

// Difference between current day and my birthday
let differenceInMiliseconds = currentDay.getTime() - personsBirthday.getTime();

// Converts miliseconds to days
let milisecondsInDays = Math.floor(differenceInMiliseconds / (1000 * 3600 * 24));
console.log(milisecondsInDays);
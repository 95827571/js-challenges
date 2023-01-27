// let hunger = "full"

// if(hunger == "hungry") {
//     console.log("I am very hungry!");
// } else if (hunger == "full") {
//     console.log("I am bloody full.");
// } else {
//     console.log("Oh go on then, why not!")
// }

// let music = "asdad"

// if (music.toLowerCase() == "classical") {
//     console.log("Oh, how relaxing")
// } else if (music.toLowerCase() == "disco") {
//     console.log("Where's the party?")
// } else {
//     console.log("Turn it down! 😒")
// }

// if(1 === true) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// let age = 18

// if (age > 17) {
//     console.log("Yes I can serve you.")
// } else {
//     console.log("Sorry, I can't serve you.")
// }

// // let hunger = "hungry"
// let food = "sprouts"

// // if(hunger == "full" && food == "ice cream") {
// //     console.log("Of course, who wouldn't")
// // } else if (hunger == "hungry" && food == "ice cream") {
// //     console.log("Yes please I'm straving, could I also have a pizza")
// // } else if (hunger == "hungry" && food == "sprouts") {
// //     console.log("Actually, I can wait")
// // } else {
// //     console.log("No thanks, I'm stuffed")
// // }

// if (food == "chips" || food == "pizza") {
//     console.log("Yay lets eat!")
// } else if (food == "broccoli" || food == "sprouts") {
//     console.log("EWWW NO!")
// } else {
//     console.log("What should we eat?")
// }
// let day = "saturday"
// if (day == "saturday" || day == "sunday") {
//     console.log("Yay it's the weekend");
// } else {
//     console.log("Oh no, work again!")
// }

// let food = "sprouts"

// switch(food) {
//     case "sprouts":
//         console.log("ew")
//         break;
//     case "pizza":
//         console.log("yes")
//         break;
//     default:
//         console.log("get me food")
//         break;
// }
// let pizzaTopping = "pepperoni"

// switch(pizzaTopping) {
//     case "pepperoni":
//         console.log(`My favourite topping is ${pizzaTopping}`);
//         break;
//     case "pineapple":
//         console.log(`Are you crazy? ${pizzaTopping}!?!?!? 😒😒`)
//         break;
//     default:
//         console.log("put a topping on it");
//         break;
// }

// the classic fizz buzz
// let result = ""
// let num = 2
// if (num % 3 == 0) {
//     result += "fizz"
// }
// if (num % 5 == 0) {
//     result += "buzz"
// }
// if (!(num % 5 == 0 || num % 3 == 0)) {
//     result = num;
// }
// console.log(result)


// activity 2
// let age = 17

// if (age >= 17) {
//     console.log("I can serve you.")
// } else {
//     console.log("Sorry, I can not serve you.")
// }


// // activity 3
// let age = 16
// let country = "UK"
// if (age >= 17 && country === "UK") {
//     console.log("I can serve you, are you sure you can afford with the cost of living?")
// } else if (age >= 21 && country !== "UK") {
//     console.log("I can serve you")
// } else {
//     console.log("I can't serve you")
// }

// // activity 4
// let day = "saturday"
// if(day == "saturday" || day == "sunday") {
//     console.log("YAY ITS WEEKEND")
// } else {
//     console.log("IT'S NOT WEEKEND :(")
// }

// // activity 4
// let pizzaTopping = "pepperoni"

// switch(pizzaTopping) {
//     case "pepperoni":
//         console.log(`My favourite topping is ${pizzaTopping}`);
//         break;
//     case "pineapple":
//         console.log(`Are you crazy? ${pizzaTopping}!?!?!? 😒😒`);
//         break;
//     default:
//         console.log("put a topping on it");
//         break;
        
// }

// console.log(`${pizzaTopping}`)

// // activity 5 
// let password = "philip";
// // philip is not short :()
// if(password.length < 8) {
//     console.log(`${password} is too short :(`);
// } else {
//     console.log(`${password} is strong enough!`);
// }

// // activity 6 - the classic fizz buzz
// let result = ""
// let num = 2
// if (num % 3 == 0) {
//     result += "fizz"
// }
// if (num % 5 == 0) {
//     result += "buzz"
// }
// if (!(num % 5 == 0 || num % 3 == 0)) {
//     result = num;
// }
// console.log(result)

// // activity 7
// let townOfHome = "the UK, not sure where"
// let placeOfWork = "Some development company"
// let currentTime = 7;

// if(currentTime == 7) {
//     console.log(`I'm at home in ${townOfHome}`);
// } else if (currentTime == 8) {
//     console.log("I am commuting");
// } else if (currentTime == 9) {
//     console.log(`I am at work in, ${placeOfWork}`);
// }

// activity 8
// const stringToCheck = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// const vowels = ['a', 'e', 'i', 'o', 'u']
// let result = ""

// let stringArray = stringToCheck.split("").reverse();

// for (let i = 0; i < stringArray.length; i++) {
//     const element = stringArray[i];
//     if (vowels.includes(element)) {
//         result = element;
//     }
// }

// console.log(result);

// activity 9
// const wordToCheck = "dead"

// if(wordToCheck.charAt(0) === wordToCheck.charAt(wordToCheck.length-1)) {
//     console.log("YAY")
// } else {
//     console.log(":(")
// }

// activity 10
// const givenNumber1 = 10
// const givenNumber2 = 21
// let result = givenNumber1 + givenNumber2;
// if(result % 2 == 0) {
//     console.log(result)
// } else {
//     result = givenNumber1 * givenNumber2;
//     console.log(result);
// }
// function isEven(num1, num2) {
//     return num1 + num2 % 2 == 0
// }

// activity 11
// const stringToCheck = 2020202
// const reversedString = stringToCheck.toString().trim().split('').reverse().join('');

// console.log(`Is ${stringToCheck} Palindrome: ${stringToCheck == reversedString}`)
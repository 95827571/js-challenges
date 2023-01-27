let favouriteDrinks = [
    "Water",
    "Water 2",
    "Fanta"
]

// for (let i = favouriteDrinks.length; i >= 0; i--) {
//     console.log(favouriteDrinks[i]);
// }

// for (let i = 0; i < favouriteDrinks.length; i += 2) {
    
// }

// for loop :D
// for (let i = 0; i < 5; i++) {
//     console.log(`for loop index: ${i}`);
// }


// // while loop :D
// let index = 0
// let keepGoing = true
// while (true) {
//     index++;

//     console.log(`while loop index: ${index}`);
//     if(index >= 11) {
//         break;
//     }
// }

// // activity 2
let evenNumbers = []

for (let i = 20; i > 0; i--) {
    if (i % 2 == 0) {
        evenNumbers.push(i)
    }
}
console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)

// // activity 2 b
// let oddNumbers = []
// for (let i = 0; i < 30; i++) {
//     if (i % 2 != 0) {
//         oddNumbers.push(i)
//     }
// }

// console.log(`The odd numbers between 0 and 30 are: ${oddNumbers}`)

// activity 3
// let age = 1
// while(age < 21) {
//     age++;
//     if (age < 18) {
//         console.log("You're a child")
//     } else {
//         console.log("You're an adult")
//     }
// }

// activity 4
// let randomNumbers = [];

// for (let i = 0; i < 6; i++) {
//     let generatedNumber = Math.floor(Math.random()*6)+1;
//     randomNumbers.push(generatedNumber);
// }

// console.log(`My 6 random numbers are ${randomNumbers}`)


// activity 5
// let filmsToCheck = [
//     "Film 1",
//     "Film 2",
//     "Ghostbusters",
//     "Film 3",
// ]

// for (let i = 0; i < filmsToCheck.length; i++) {
//     const film = filmsToCheck[i];
//     if (film.toLowerCase() == "ghostbusters") {
//         console.log("YAY ITS GHOST BUSTERS!")
//     } else {
//         console.log("Boo! We want ghostbusters!")
//     }
// }

// activity 6
// for (let i = 0; i < 6; i++) {
//     let generatedNumber = Math.floor(Math.random()*30)
//     if (generatedNumber % 7 == 0) {
//         console.log(`${generatedNumber} is divisible by 7`)
//     } else {
//         console.log(`${generatedNumber} is not divisible by 7`)
//     }
// }

// activity 7

// Creates an array 
const bobsFollowers = [
    "Arben",
    "Jenny",
    "John",
    "Jordan",
]

const hannahsFollowers = [
    "Alisha",
    "Blake",
    "Connor",
    "Jordan",
]

// Goes through each of bobs followers
for (let x = 0; x < bobsFollowers.length; x++) {
    const bobsFollower = bobsFollowers[x];

    // Goes through each of hannahs followers 
    for (let i = 0; i < hannahsFollowers.length; i++) {
        const hannahsFollower = hannahsFollowers[i];

        // 
        if (bobsFollower.toLowerCase() === hannahsFollower.toLowerCase()) {
            console.log(`Hannah and Bob share the follower: ${hannahsFollower}`);
        }
    }
}
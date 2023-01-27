
const shopItems = [
    "bread",
    "bupcake",
    "baguette",
    "salad",
    "pizza",                // mmmmmmmmm
    "cadbury chocolate bar" // also very mmmmm
]

// Gets a random item from the list
const getRandomItem = () => {
    const randomItem = shopItems[Math.floor(Math.random()*shopItems.length)]
    return randomItem;
}

// // item and arraytocheck must be a string and string array, shame its not typescript
// const isValidItem = (item, arrayToCheck) => {
//     let newArray = []
//     for (let i = 0; i < arrayToCheck.length; i++) {
//         const element = arrayToCheck[i];
//         element.toLowerCase()
//         newArray.push(element)
//     }

//     return newArray.includes(item.toLowerCase())
// }

// // Asks the user a question -- No idea how to use standard input lib so
// const askUserQuestion = async (question, ...answers) => {
//     let args = Array.prototype.slice.call(answers)

//     // Asks the user a question and outputs the text
//     console.log(question);
//     for (let i = 0; i < args.length; i++) {
//         const response = args[i];
//         const text = `${i+1}) ${response}`
//         console.log(text);
//     }
    
//     let userResponse = ""
//     while(true) {
//         userResponse = await rl.question("What do")
//         if(!isValidItem(userResponse, shopItems)) {
//             console.log("Please input a valid item!");
//             continue;
//         }

//         if(isValidItem(userResponse, shopItems)) {
//             break;
//         }
//     }
// }

// Since I have no idea how to do inputs its gonna randomise what item you get

const buyingItems = () => {
    let randomItem = ""
    while(!shopItems.includes(randomItem)) {
        randomItem = getRandomItem()
    }
    return randomItem;
}

console.log(`You bought, ${buyingItems()}.`)

const shopItems = [
    "bread",
    "cupcake",
    "baguette",
    "salad",
    "pizza",                // mmmmmmmmm
    "cadbury chocolate bar" // also very mmmmm
]

// Gets a random item from the list
const getRandomItem = () => {
    return shopItems[Math.floor(Math.random()*shopItems.length)];
}

// Since I have no idea how to do inputs its gonna randomise what item you get

const buyingItems = () => {
    let randomItem = ""
    while(!shopItems.includes(randomItem)) {
        randomItem = getRandomItem()
    }
    return randomItem;
}

console.log(`You bought, ${buyingItems()}.`)
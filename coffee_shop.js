// returns a random item from the array, remember dry. :)
getRandomItemFromArray = (array) => {
    return array[Math.floor(Math.random()*array.length)];
}

const coffeeShop = {
    branch: ["Branch 1", "Branch 2", "Branch 3", "Branch 4"],
    // Creates an array of objects, each object with the same key-value pair(item, cost)
    food: [{item: "Cookies", cost: 2.25}, {item: "Oranges", cost: 1.00}, {item: "Banana", cost: 1.20}],

    // Creates an array of objects, each object with the same key-value pair(item, cost)
    drink: [{item: "Water", cost: 0.10}, {item: "Coca-Cola", cost: 1.50}, {item: "Pepsi", cost: 1.70}],

    drinksOrdered (amountOfItems) {
        let total = 0;
        let drinksString = "";

        // Gets a random branch
        const _branch = getRandomItemFromArray(this.branch)

        // Gets a random drink x amount of times
        for (let amount = 0; amount < amountOfItems; amount++) {

            // Gets a random drink
            const _drink = getRandomItemFromArray(this.drink);

            // Adds the cost to a total
            total += _drink["cost"];

            // Concatenates to the end of a string
            drinksString += `\n${_drink["item"]}: £${_drink["cost"].toFixed(2)}`;
        }

        // Returns your order in a very nicely foramtted string
        return `${_branch} Order: ${drinksString}\nYour total cost is: £${total.toFixed(2)}`
    },
    foodOrdered (amountOfItems) {
        let total = 0;
        let foodsString = "";

        // Gets a random branch
        const _branch = getRandomItemFromArray(this.branch)

        // Gets a random drink x amount of times
        for (let amount = 0; amount < amountOfItems; amount++) {
            // Gets a random food item
            const _food = getRandomItemFromArray(this.food);

            // Adds to the total cost
            total += _food["cost"];

            // Concatenates to the end of a string
            foodsString += `\n${_food["item"]}: £${_food["cost"].toFixed(2)}`;
        }

        // Returns your order in a very nicely foramtted string
        return `${_branch} Order: ${foodsString}\nYour total cost is: £${total.toFixed(2)}`
    },
}

console.log(coffeeShop.drinksOrdered(2));
console.log(coffeeShop.foodOrdered(1));

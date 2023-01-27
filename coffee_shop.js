const coffeeShop = {
    branch: ["Branch 1", "Branch 2", "Branch 3", "Branch 4"],
    food: [{item: "Cookies", cost: 2.25}, {item: "Oranges", cost: 1.00}, {item: "Banana", cost: 1.20}],
    drink: [{item: "Water", cost: 0.10}, {item: "Coca-Cola", cost: 1.50}, {item: "Pepsi", cost: 1.70}],

    drinksOrdered (amountOfItems) {
        let total = 0;
        let drinksString = "";
        let _branch = this.branch[Math.floor(Math.random()*this.branch.length)]

        for (let amount = 0; amount < amountOfItems; amount++) {
            const _drink = this.drink[Math.floor(Math.random()*this.food.length)];
            total += _drink["cost"];

            drinksString += `\n${_drink["item"]}: ${_drink["cost"].toFixed(2)}`;
        }

        let result = `${_branch} Order: ${drinksString}\nYour total cost is: ${total.toFixed(2)}`

        return result
    },
    foodOrdered (amountOfItems) {
        let total = 0;
        let drinksString = "";
        let _branch = this.branch[Math.floor(Math.random()*this.branch.length)]
        
        for (let amount = 0; amount < amountOfItems; amount++) {
            const _food = this.food[Math.floor(Math.random()*this.food.length)];
            total += _food["cost"];

            drinksString += `\n${_food["item"]}: ${_food["cost"].toFixed(2)}`;
        }

        let result = `${_branch} Order: ${drinksString}\nYour total cost is: ${total.toFixed(2)}`

        return result
    },
}

console.log(coffeeShop.drinksOrdered(2));
console.log(coffeeShop.foodOrdered(2));
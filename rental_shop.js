class Item {
    // Private properties -- Only accessible inside the class
    #nameOfItem = ""
    constructor(nameOfItem, priceOfItem) {
        this.#nameOfItem = nameOfItem;
        this.priceOfItem = priceOfItem;
    }

    // Gets the private property name of item -- So its accessible outside of the class, but not changeable
    get nameOfItem() {
        return this.#nameOfItem;
    }

    // Gets the property price of item
    get priceOfItem() {
        // We use the _ or else the getter and setter will cause a stack overflow error
        return this._priceOfItem;
    }

    set priceOfItem(value) {
        this._priceOfItem = value;
    }
}

class Shop {
    // Private properties -- Only accessible inside the class
    #name = ""
    #number = 000000000
    #itemsArray = [new Item("placeholder", 0)]
    constructor(name, number, itemsArray) {
        this.#name = name;
        this.#number = number;
        this.#itemsArray = itemsArray;
    }

    // Gets the private property name -- So its accessible outside of the class, but not changeable
    get name() {
        return this.#name;
    }

    // Gets the private property number
    get number() {
        return this.#number;
    }

    // Gets the private property items
    get itemsArray() {
        return this.#itemsArray;
    }

    // Private method, only accessible inside the class
    // Just finds the item asked for
    #findItem (itemName) {
        return this.#itemsArray.find(item => item.nameOfItem === itemName)
    }

    // Lists all the movies in a nice format
    listAllMovies () {
        let movieString = "These are the available movies: \n"
        for (let i = 0; i < this.#itemsArray.length; i++) {
            const element = this.#itemsArray[i];
            movieString += `${element.nameOfItem}: £${element.priceOfItem.toFixed(2)}\n`;
        }

        console.log(movieString)
    }

    // Finds the item given, and displays its price and name
    buyItem (itemName) {
        let item = this.#findItem(itemName);
        console.log(`Thank you for buying the item ${item.nameOfItem}, that will be £${item.priceOfItem.toFixed(2)} please.`)
    }
}

const rentalShop = new Shop("Philip's Movie Rentals", 0775675725, [
    new Item("Spongebob Movie", 1.00),
    new Item("South Park Movie", 1.65),
    new Item("Jurassic Park", 1.35),
])

rentalShop.listAllMovies();
rentalShop.buyItem("South Park Movie");
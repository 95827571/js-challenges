class Item {
    #nameOfItem = ""
    #priceOfItem = 0
    constructor(nameOfItem, priceOfItem) {
        this.#nameOfItem = nameOfItem;
        this.#priceOfItem = priceOfItem;
    }

    get nameOfItem() {
        return this.#nameOfItem;
    }

    get priceOfItem() {
        return this.#priceOfItem;
    }
}

class Shop {
    #name = ""
    #number = 000000000
    #itemsArray = [new Item("placeholder", 0)]
    constructor(name, number, itemsArray) {
        this.#name = name;
        this.#number = number;
        this.#itemsArray = itemsArray;
    }

    get name() {
        return this.#name;
    }

    get number() {
        return this.#number;
    }

    get itemsArray() {
        return this.#itemsArray;
    }

    #findItem (itemName) {
        return this.#itemsArray.find(item => item.nameOfItem === itemName)
    }

    listAllMovies () {
        let movieString = "These are the available movies: \n"
        for (let i = 0; i < this.#itemsArray.length; i++) {
            const element = this.#itemsArray[i];
            movieString += `${element.nameOfItem}: £${element.priceOfItem.toFixed(2)}\n`;
        }

        console.log(movieString)
    }

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
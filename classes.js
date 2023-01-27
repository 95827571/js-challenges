class Vehicle {
    #vehicleType;

    get vehicleType() {
        return this.#vehicleType;
    }

    drive = () => {
        return "Brrrr";
    }

    constructor(vehicleType) {
        this.#vehicleType = vehicleType;
    }
}

class Tank extends Vehicle {
    #country;
    #tankName;

    get country() {
        return this.#country;
    }

    get tankName() {
        return this.#tankName;
    }

    constructor(country, tankName) {
        super("Tank")
        this.#country = country;
        this.#tankName = tankName;
    }

    // Overriden drive from default class
    drive = () => {
        return `The ${this.#tankName} has started driving!`;
    }
}

let challengerTank = new Tank("England", "Challenger II");
let leopardTank = new Tank("Germany", "Leopard 2");

console.log(leopardTank.drive());
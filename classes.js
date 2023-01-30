// class Vehicle {
//     #vehicleType;
//     #name;

//     get vehicleType() {
//         return this.#vehicleType;
//     }

//     get name() {
//         return this.#name;
//     }

//     drive = () => {
//         return "Brrrr";
//     }

//     constructor(vehicleType, name) {
//         this.#vehicleType = vehicleType;
//         this.#name = name;
//     }
// }

// class Tank extends Vehicle {
//     #country;
//     #groundSpeed;

//     get country() {
//         return this.#country;
//     }

//     get groundSpeed() {
//         return this.#groundSpeed;
//     }

//     constructor(country, tankName, groundSpeed) {
//         super("Tank", tankName)
//         this.#country = country;
//         this.#groundSpeed = groundSpeed;
//     }

//     // Overriden drive from default class --  Example of polymorphism
//     drive = () => {
//         return `The ${super.name} has started driving!`;
//     }
// }

// class Helicopter extends Vehicle {
//     #flightSpeed;

//     constructor(helicopterName, flightSpeed) {
//         super("Helicopter", helicopterName)
//         this.#flightSpeed = flightSpeed;
//     }

//     get flightSpeed() {
//         return this.#flightSpeed;
//     }

//     drive = () => {
//         return ""
//     }
// }

// let challengerTank = new Tank("England", "Challenger II");
// let leopardTank = new Tank("Germany", "Leopard 2");

// console.log(leopardTank.drive());




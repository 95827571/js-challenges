// We create our class here
class Car {
    // This constructor is what will be called when we do "new Car()".
    constructor(nameOfCar, makeOfCar, yearOfMake) {

        // Anything that has "this." as a prefix, are the properties of our class.
        this.nameOfCar = nameOfCar;
        this.makeOfCar = makeOfCar;
        this.yearOfMake = yearOfMake;
    }
}

// All car classes (any variable defined with `= new Car()`) will have the same properties
//  Variable of Class -- Class Constructor
let carOne = new Car("Diablo SE30", "Lamborghini", 1995);

//  Variable of Class -- Name       -- Make -- Year
let carTwo = new Car("Impreza WRX", "Subaru", 2003)


// Here we are accessing our lamborghini car class, through the variable "carOne"
// And then we are accessing the name of the car through our property "nameOfCar"
console.log(carOne.makeOfCar); // <- This will print the name of our car, the lamborghini diablo

// Here we are accessing our subaru car class, through the variable "carTwo"
// And then we are getting the make of the car through our property "makeOfCar"
console.log(carTwo.makeOfCar) // <- This will print the make of our car, the subaru impreza
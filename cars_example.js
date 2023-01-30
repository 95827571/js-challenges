// We create our class here
class Car {
    // This constructor is what will be called when we do "new Class()".
    // This just constructs our class with the needed properties.
    // A constructor can have as many parameters as you want.
    constructor(nameOfCar, makeOfCar, yearOfMake) {

        // Anything that has "this." as a prefix, are the properties of our class.
        this.nameOfCar = nameOfCar;
        this.makeOfCar = makeOfCar;
        this.yearOfMake = yearOfMake;

        // We can define as many properties as we want (remember properties in classes have "this." prefix)
    }
}

// All car classes (any variable defined with `= new Car()`) will have the same properties
//  Variable of Class          -- Class Constructor
let lamborghiniDiabloCar = new Car("Diablo SE30", "Lamborghini", 1995);

//  Variable of Class       -- Name         -- Make   -- Year
let subaruImprezaCar = new Car("Impreza WRX", "Subaru", 2003)

// Here we are accessing our new car class through the variable "lamborghiniDiablo"
// And through that variable, we are accessing a property we created called "nameOfCar"
lamborghiniDiabloCar.nameOfCar // This line does nothing, we are just referencing a property

// So if I was to log the property above, we should get the name of our car.
console.log(lamborghiniDiabloCar.nameOfCar); // <- This will print the name of our lamborghini

// Here again, we are accessing our new car class through "subaruImprezaCar"
// And through the variable, we are getting the property "brandOfCar"
subaruImprezaCar.makeOfCar // Again this line will do nothing, just for demonstration

// This will log the brand of car
console.log(subaruImprezaCar.makeOfCar) // <- This will print the make of the car
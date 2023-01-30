class CyberPet {
    #petName = ""
    #typeOfPet
    #age = 0;
    constructor (petName, typeOfPet, age) {
        this.#petName = petName;
        this.#typeOfPet = typeOfPet;
        this.#age = age;
    }
    get petName() {
        return this.#petName;
    }

    get typeOfPet() {
        return this.#typeOfPet;
    }

    get age() {
        return this.#age;
    }

    play () {
        console.log("You are playing with your pet");
    }

    clean () {
        console.log(`You clean ${this.#petName}, he gets annoyed at you, but it has to be done.`)
    }

    feed () {
        console.log(`You feed ${this.#petName}, he is very happy :)`)
    }

    birthday () {
        this.#age++;
        console.log(`HAPPY BIRTHDAY ${this.#petName.toUpperCase()}, YOU ARE NOW ${this.age}!`)
    }
}

class Fish extends CyberPet {
    #typeOfFish;
    constructor(petName, age, typeOfFish) {
        super(petName, "Fish", age);
        this.#typeOfFish = typeOfFish;
    }

    get typeOfFish() {
        return this.#typeOfFish;
    }

    // Overrides original play func
    play () {
        console.log(`You are playing with ${super.petName}, your cute little ${this.#typeOfFish}, he swims around very quickly.`)
    }
}

class Dog extends CyberPet {
    #typeOfDog;

    constructor(petName, age, typeOfDog) {
        super(petName, "Dog", age);
        this.#typeOfDog = typeOfDog;
    }

    get typeOfDog() {
        return this.#typeOfDog;
    }

    // Overrides original play func
    play () {
        console.log(`You run around with ${super.petName} and throw a ball, he is a very happy ${super.typeOfPet} :D`)
    }
}

let rileyTheDog = new Dog("Riley", 11, "Pugalier")
let rileyAsAFish = new Fish("Rilette", 2, "Koi")

rileyAsAFish.play();
console.log(rileyTheDog.age)
rileyTheDog.play();
rileyTheDog.birthday();
rileyAsAFish.birthday();
const pet = {
    petName: "Riley",
    typeOfPet: "Dog",
    age: 11,
    colour: "Golden Brown",
    petFeatures: ["Lazy", "Quiet", "Slow"],
    eat () {
        console.log(`${this.petName} is eating`)
    },
    drink () {
        console.log(`${this.petName} is drinking`)
    },
}

pet.drink();
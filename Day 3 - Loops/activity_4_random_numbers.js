let randomNumbers = [];

for (let i = 0; i < 6; i++) {
    let generatedNumber = Math.floor(Math.random()*6)+1;
    randomNumbers.push(generatedNumber);
}

console.log(`My 6 random numbers are ${randomNumbers}`)
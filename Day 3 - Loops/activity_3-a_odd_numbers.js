let oddNumbers = []

for (let i = 0; i < 30; i++) {
    if (i % 2 != 0) {
        oddNumbers.push(i)
    }
}

console.log(`The odd numbers between 0 and 30 are: ${oddNumbers}`)
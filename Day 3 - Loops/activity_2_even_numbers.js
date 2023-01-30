let evenNumbers = []

for (let i = 20; i > 0; i--) {
    if (i % 2 == 0) {
        evenNumbers.push(i)
    }
}
console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)
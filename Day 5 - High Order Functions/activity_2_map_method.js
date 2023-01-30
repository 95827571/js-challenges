const ourNumbers = [5, 8, 1, 92, 5]

// prints each char as its ascii code
ourNumbers.map((num) => {
    const newNum = num * 3;
    console.log(`${num} * 3 = ${newNum}`);
})
// loops through each character of a string
const forEachCharacter = (string, func) => {
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        func(element);
    }
}

// cast char to int
const printCharAsASCIICode = (char) => {
    console.log(char.charCodeAt(0));
}

forEachCharacter("Hello", printCharAsASCIICode);
forEachCharacter("Philip", (char) => {console.log(char)});

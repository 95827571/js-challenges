// Convert all characters to upper case
console.log("Hello".toUpperCase())

const str = "hello"

// gets the index of the character in the arguments
console.log(`string.charAt(): ${str.charAt('e')}`)

// concatenates strings onto the end of the "hello" string
console.log(`string.concat(args[]): ${str.concat("world", " my name is philip")}`)

// finds and replaces the substring in the first argument, with the string in the second argument
console.log(`string.replace(arg1, arg2): ${str.replace("hello", "bye")}`)

// sees if the string contains the substring given in the argument, returns true if it does
console.log(`string.includes(arg): ${str.includes("hi")}`)
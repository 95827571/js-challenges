// activity 8
const longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
const vowels = ['a', 'e', 'i', 'o', 'u']
let result = ""

let stringArray = longString.split("").reverse();

for (let i = 0; i < stringArray.length; i++) {
    const element = stringArray[i];
    if (vowels.includes(element)) {
        result = element;
    }
}

console.log(result);
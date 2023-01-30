let age = 16
let country = "UK"
if (age >= 17 && country === "UK") {
    console.log("I can serve you, are you sure you can afford with the cost of living?")
} else if (age >= 21 && country !== "UK") {
    console.log("I can serve you")
} else {
    console.log("I can't serve you")
}
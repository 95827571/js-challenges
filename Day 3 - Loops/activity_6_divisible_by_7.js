for (let i = 0; i < 6; i++) {
    let generatedNumber = Math.floor(Math.random()*30)
    if (generatedNumber % 7 == 0) {
        console.log(`${generatedNumber} is divisible by 7`)
    } else {
        console.log(`${generatedNumber} is not divisible by 7`)
    }
}
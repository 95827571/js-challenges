const password = "Jg£Gl36@gk";
let passwordAnalysis = false;
let counter = 0;

const checkPasswordLength = (password) => {
    return password.length >= 8 && password.length <= 16;
}

if (checkPasswordLength(password)) {
    passwordAnalysis = true
} else {
    console.log("We need a longer password!")
}

if(passwordAnalysis) {
    const chars = ["!", "Â", "£", "$", "%", ".", "*"]
    if (password.match(/[A-Z]/)) {
        counter++;
    }

    if (password.match(/[a-z]/)) {
        counter++;
    }

    if (password.match(/[0-9]/)) {
        counter++;
    }

    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (password.includes(char)) {
            counter++;
            break;
        }
    }

    switch (counter) {
        case 1:
            console.log("This is a weak password");
            break;
        case 2:
            console.log("This is a sufficient password");
            break;
        case 3:
            console.log("This is a adequate password");
            break;
        case 4:
            console.log("This is a strong password");
            break;
        default:
            console.log("Your password is clearly the best password to exist.");
            break;
    }
}
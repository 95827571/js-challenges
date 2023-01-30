const helloCodeNation = () => {
    console.log("Hello code nation");
}

// loops 5 times, calling the func each time
const doFuncFiveTimes = (func) => {
    for (let i = 0; i < 5; i++) {
        func();
    }
}

doFuncFiveTimes(helloCodeNation);
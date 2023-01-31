const helloCodeNation = () => {
    console.log("Hello code nation");
}

// loops 5 times, calling the func each time
const doFuncFiveTimes = (func, num) => {
    for (let i = 0; i < num; i++) {
        func();
    }
}

doFuncFiveTimes(helloCodeNation, 5);

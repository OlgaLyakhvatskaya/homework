
const twoArg = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}



module.exports = (num1, num2) => () => twoArg(num1, num2);

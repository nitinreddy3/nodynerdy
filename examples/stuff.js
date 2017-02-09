var counter = (arr) => {
    return 'This array has ' + arr.length + ' elements';
}

var adder = (a, b) => {
    return `The addition of numbers is ${a+b}`;
}

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};
function callBackFunction(func) {
    func();
}

var hello = function() {
    console.log('Hello');
}

callBackFunction(hello);
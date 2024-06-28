const fibonacci = function(count_arg) {
    const fib = [0, 1];
    for (let i = 2; i < count_arg; i ++){
        fib[i] = fib[i - 1] + fib[i -2];
    }
    return fib[count_arg];
};

module.exports = fibonacci;
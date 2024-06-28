const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let new_str = str.toLowerCase().split('').filter((char) => alphanumerical.includes(char)).join('');
    let reversed_str = new_str.split('').reverse().join('')

    return new_str === reversed_str;
};

module.exports = palindromes;
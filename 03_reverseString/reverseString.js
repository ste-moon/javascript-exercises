const reverseString = function(string) {
    let reversedString = '';
    let splitString = string.split('');
    for (let i = splitString.length; i > 0; i--) {
        reversedString += splitString.pop();
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

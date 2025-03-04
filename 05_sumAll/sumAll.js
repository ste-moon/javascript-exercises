const sumAll = function(first, last) {

    if (typeof(first) != 'number' || typeof(last) != 'number') {
        return 'ERROR';
    }
    else if (first % 1 !=  0 || last % 1 != 0) {
        return "ERROR";
    }
    else if (first < 0 || last < 0){
        return "ERROR";
    }
    else if (first < last) {
        n = last - first + 1;
    }
    else if (first > last) {
        n = first - last + 1;
    }
    return n / 2 * (first + last);
};

// Do not edit below this line
module.exports = sumAll;

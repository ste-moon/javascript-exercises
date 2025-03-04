const removeFromArray = function(array, ...theArgs) {
    filteredArray = []
    for (i = array.length; i >= 0; i--) {
      if (!theArgs.includes(array[i]) && array[i] !== undefined) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray.reverse();
};

// Do not edit below this line
module.exports = removeFromArray;

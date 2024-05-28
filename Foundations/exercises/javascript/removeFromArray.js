const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };
  
  // const removeFromArray = function(array, ...args) {
  //   return array.filter(val => !args.includes(val))
  // }
  //
  
  module.exports = removeFromArray;
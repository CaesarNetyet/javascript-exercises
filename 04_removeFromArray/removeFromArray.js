const removeFromArray = function(array, ...numbers) { 
   let slicedArray = [];
   for (let i = 0; i < array.length; i++) {
      
      slicedArray.push(array[i]);
      if (numbers == i) {
         slicedArray.splice(i, 1);
      }
      }

   return slicedArray
}



// Do not edit below this line
module.exports = removeFromArray;
console.log(removeFromArray(['uno', 'dos', 'tres', 'cuatro'], 1))
// binary_search

"use strict"

var test_array_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test_array_b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function binary_search(search, array, index = 0) {
  index = Math.round(array.length / 2) - 1;
  if (search == array[index]) {
    return search-1;
  }
  else if (search < array[index]) {
    array = array.slice(0, index);
    return binary_search(search, array, index);
  }
  else if (search > array[index]) {
    array = array.slice(index+1, array.length);
    return binary_search(search, array, index);
  }
  else {
    return -1;
  }
}

// Driver code
console.log(binary_search(5, test_array_a))
console.log(binary_search(6, test_array_b))
console.log(binary_search(10, test_array_a))
console.log(binary_search(11, test_array_b))
console.log(binary_search(2, test_array_a))
console.log(binary_search(2, test_array_b))

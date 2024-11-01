var numbers = [1, 2, 3, 4, 665, 666, 7];
var numbersTwo = [154, 25, 355, 44, 665, 666, 7];

function main() {
  var result = filter(numbers, 500);
  console.log(result);

    var result = filter(numbersTwo, 500);
    console.log(result);
  
}

function filter(arrayToFilter, highNumber) {
  var filteredNumbers = [];

  for (let i = 0; i < arrayToFilter.length; i++) {
    if (arrayToFilter[i] <= highNumber) {
      filteredNumbers.push(arrayToFilter[i]);
    }
  }
  return filteredNumbers;
}

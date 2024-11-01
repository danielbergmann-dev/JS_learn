function main() {
  var numbers = [100, 200, 300, 400];
  var sum = 0;

  // For LOOP

  for (let i = 0; i < numbers.length; i++) {
    var totalSum = sum += numbers[i];
    console.log("totalSum" + totalSum);
    console.log("numbers:" + numbers[i]);
    
    console.log("sum:" + sum);
    
    
  }
  console.log(totalSum);
  
}

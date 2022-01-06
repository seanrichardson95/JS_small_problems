/*
Given list of numbers in short-hand range
[1, 3, 7, 2, 4, 1]  represents [1, 3, 7, 12, 14, 21]
Numbers always increasing

Some people use separators too for their ranges
1-3, 1-2 => 1, 2, 3, 11, 12
1:5:2 => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
104-2 => 104, 105, ... 112
104-02 => 104, 105, ... 202
545, 64:11 => 545, 564, 565, .. 611

Input:
- String, range in code

Output:
- Array, list of complete numbers

Rules:
- each range is separated by commas
- numbers are always increasing from left to right
- three separators, (-, :, ..) indicate a shorthand range
  - from number that ends in first significant number to a number that ends with the second significant number

Notes:
- Compare numbers using number strings
- Add actual numbers
- Iterate using numbers?
- Should I calculate start and end numbers and fill in gaps or keep on adding numbers until I get to the end number?
- Two scenarios when I add numbers, numbers separated by commas, numbers separated by range delimiters
- When I split up the number string, I think I should keep them as strings

Questions:
- Should I deal with negative numbers?
- What about empty string? String with characters?
- will there be mixed delimiters? i.e., 1-5, 2:7 ?

Data Structure
- Keep the shorthand range list in an array, with each range being a subarray
'1, 3, 7, 2' -> ['1', '3', '7', '2']
'1-3, 1-2' -> [['1', '3'], ['1', '2']]
'1:5:2' -> [['1', '5', '2']]
'104-02' -> [['104', '02']]
- Treat regular string elements different from array elements

Algorithm:
- initialize result array
- Split string into array called ranges using ', ' delimiter (ranges is array of number strings)
- Iterate through ranges using forEach
  - replace element with subarray for each element where a delimiter is present
- Iterate through ranges using forEach
  - lastNumber = Number(result[result.length -1]) || 0
  - if element is typeof string
    - currentNumber = lastNumber
    - use loop to add 1 to currentNumber until String(currentNumber) ends with the element
      - once that is found, push String(currentNumber) to the result array
  - else if Array.isArray(element)
    - currentNumber = lastNumber
    - use loop to add 1 to currentNumber until String(currentNumber) ends with the element[0]
    - once that number is found, iterate through the array, with numberSuffix = element of subarray
    - use do while loop
      - push String(currentNumber) to result array
      - add 1 to currentNumber
      - break when String(currentNumber) ends with numberSuffix
*/

function extendRange(rangeString) {
  let result = [];
  let ranges = rangeString.split(', ');
  ranges.forEach((range, index) => {
    if (/[:\-(..)]/.test(range)) ranges[index] = range.match(/\d+/g);
  });

  ranges.forEach(range => {
    let lastNumber = result[result.length - 1] || 0;

    let currentNumber = lastNumber;
    let numberSuffix = Array.isArray(range) ? range[0] : range;

    do {
      currentNumber += 1;
    } while (!String(currentNumber).endsWith(numberSuffix))

    result.push(currentNumber);

    if (Array.isArray(range)) {
      range.slice(1).forEach(numString => {
        while (true) {
          currentNumber += 1;
          result.push(currentNumber);
          if (String(currentNumber).endsWith(numString)) break;
        }
      });
    }
  });

  return result;
}

console.log(extendRange('1, 3, 7, 2, 4, 1')); // 1, 3, 7, 12, 14, 21
// console.log(extendRange('1-3, 1-2')); // 1, 2, 3, 11, 12
console.log(extendRange('1:5:2')); // 1, 2, 3, 4, 5, 6, ... 12
// console.log(extendRange('104-2')); // 104, 105, ... 112
// console.log(extendRange('104-02')); // 104, 105, ... 202
// console.log(extendRange('545, 64:11')); // 545, 564, 565, .. 611
console.log(extendRange('1..4, 2..5')); // 1, 2, 3, 4, 12, 13, 14, 15
console.log(extendRange('1, 1, 1, 1-1')); // 1, 11, 21, 31..41

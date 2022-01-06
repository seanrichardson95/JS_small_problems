/*
Legal version numbers:
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Input:
- Two version numbers in the above format (strings?)

Output:
- if version1 > version 2, return 1
- if version1 < version 2, return -1
- if version1 === version 2, return 0
- if either version isn't legal return null
  - not legal: contains characters other than digits and the . character

Questions:
- What about something like '1.' ? (shouldn't matter)
- What about negative numbers? (should return null)

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

Algorithm:
- check with regex if either version is illegal and return null if so
- split each version into an array with split
- using for loop, iterate through both arrays, comparing each number
  - use longer array for the length of for loop
  - compare each number to each other, if one is bigger than the other, return
    appropriate result
  - if one of them is undefined, use 0 to compare them
- if nothing has been returned at end of for loop, return 0

*/

function compareVersions(version1, version2) {
  if (!validVersions(version1, version2)) return null;

  version1 = version1.split('.');
  version2 = version2.split('.');

  const maxLength = Math.max(version1.length, version2.length);

  for (let i = 0; i < maxLength; i += 1) {
    let num1 = version1[i] !== undefined ? Number(version1[i]) : 0;
    let num2 = version2[i] !== undefined ? Number(version2[i]) : 0;
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

function validVersions(...versions) {
  const legalVersionRegex = /^[0-9]+([.][0-9]+)*$/;
  return versions.every(version => legalVersionRegex.test(version));
}


console.log(compareVersions('0.1', '1')); // -1
console.log(compareVersions('1', '0.1')); // 1
console.log(compareVersions('1', '1.0.0')); // 0
console.log(compareVersions('1.2', '1.2.0.1')); // -1
console.log(compareVersions('3.2', '1a')); // null
console.log(compareVersions('ab', '1')); // null
console.log(compareVersions('13.37', '1.18.2')); // 1
console.log(compareVersions('1.', '1.0')); // null

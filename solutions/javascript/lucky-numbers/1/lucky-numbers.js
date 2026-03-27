// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum1 = "";
  let sum2 = "";

  for (let i = 0; i < array1.length; i++) {
    sum1 += String(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    sum2 += String(array2[i]);
  }
  return Number(sum1) + Number(sum2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let string = String(value);
  let reversedString = string.split("").reverse().join("");
  return reversedString == string;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return "Required field";
    console.log(input);

  const checkNumber = Number(input);
  if (isNaN(checkNumber) || checkNumber==0) return "Must be a number besides 0";
  return "";
}

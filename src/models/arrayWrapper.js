/** @module arrayWrapper */

/**
* Check if arrays are equal
* @function
* @param {Array} arr1
* @param {Array} arr2
* @returns {boolean}
*/
export function isArrayEqualToArray(arr1, arr2) {
    const { length: arr1Length } = arr1;
    const { length: arr2Length } = arr2;
    let isEqual = true;

    if (arr1Length !== arr2Length) return false;

    for (let i = 0; i < arr1Length; i += 1) {
        if (arr2.indexOf(arr1[i]) === -1) {
            isEqual = false;
        }
    }

    return isEqual;
}

/**
* Returns an array with new value at index
* @function
* @param {Array} array
* @param {*} value
* @param {number} index
* @returns {number} Transformed array
*/
export function insertValueAtIndex(array, value, index) {
    return [
        ...array.slice(0, index),
        value,
        ...array.slice(index),
    ];
}

/**
* Returns an array without item at index
* @function
* @param {Array} array
* @param {number} index
* @returns {number} Transformed array
*/
export function removeValueAtIndex(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

/**
* Returns sum of integers
* @function
* @param {Array} array
* @returns {number} Sum
*/
export function sumIntegers(array = []) {
    if (!Array.isArray(array)) return 0;
    return array.reduce((acc, current) => {
        let sum = acc;
        if (Number.isInteger(current)) sum += current;
        return sum;
    }, 0);
}

/**
* Returns object from array with objects
* @function
* @param {Array} array
* @param {string} keyField
* @param {string} value
* @returns {Object} Flat object
* @description Based on the entrance array there is a flat object created,
* where key and value are defined by the parameters' function
*/
export function arrayToObject(array, key, value) {
    return array.reduce((prev, current) => {
        const newObject = prev;
        newObject[current[key]] = current[value];
        return newObject;
    }, {});
}

/**
* Returns last element from array
* @function
* @param {Array} array
* @returns {*} Last element
*/
export function lastElementInList(array) {
    const arrayLength = array.length;
    return arrayLength > 0 ? array[arrayLength - 1] : null;
}

/**
* Returns first element from array
* @function
* @param {Array} array
* @returns {*} First element
*/
export function firstElementInList(array) {
    const arrayLength = array.length;
    return arrayLength > 0 ? array[0] : null;
}

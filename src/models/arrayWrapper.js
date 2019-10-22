/** @module arrayWrapper */

/**
* Check is arrays equal
* @function
* @param {Array} arr1
* @param {Array} arr2
* @returns {boolean}
*/
export function isArrayEqualToArray(arr1, arr2) {
    const { length: arr1Length } = arr1;
    const { length: arr2Length } = arr2;

    if (arr1Length !== arr2Length) return false;

    let isEqual = true;

    for (let i = 0; i < arr1Length; i += 1) {
        if (arr2.indexOf(arr1[i]) === -1) {
            isEqual = false;
        }
    }

    return isEqual;
}

/**
* Returns an array with new item with index
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
* Returns an array without item with index
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
export function sumIntegers(arr) {
    if (!Array.isArray(arr)) return 0;

    const { length } = arr;
    let value = 0;

    for (let i = 0; i < length; i += 1) {
        if (Number.isInteger(arr[i])) value += arr[i];
    }

    return value;
}

/**
* Returns object from array with objects
* @function
* @param {Array} array
* @param {string} keyField
* @param {string} value
* @returns {Object} Flat object
*/
export function arrayToObject(array, keyField, value) {
    return array.reduce((prev, current) => {
        const newObject = prev;
        newObject[current[keyField]] = current[value];
        return newObject;
    }, {});
}

/**
* Returns last element on array
* @function
* @param {Array} array
* @returns {*} Last element
*/
export function lastElementInList(array) {
    const arrayLength = array.length;
    return arrayLength > 0 ? array[arrayLength - 1] : null;
}

/**
* Returns first element on array
* @function
* @param {Array} array
* @returns {*} First element
*/
export function firstElementInList(array) {
    const arrayLength = array.length;
    return arrayLength > 0 ? array[0] : null;
}

/** @module stringWrapper */

/**
 * Returns the string with first capital letter
 * @function
 * @param {string} string
 * @returns {string} String with first capital letter
 * @description Add any string you like
 */
export function toCapitalize(string) {
    if (!string) return '';

    return string.replace(
        /^\w/, c => c.toUpperCase(),
    );
}

/**
 * Returns the string composed of array elements with first capital letter
 * @function
 * @param {array} strings
 * @returns {string} Uppercase letters
 * @description Add strings array
 */
export function capitalizeAndConcatenationArray(strings) {
    let string = '';
    strings.forEach((s) => {
        const lowerCasedString = s.toLowerCase();
        const capitalizedString = toCapitalize(lowerCasedString);
        string += capitalizedString;
    });

    return string;
}

/**
 * Returns uniq string
 * @function
 * @returns {string} Uniq string
 */
export function getUUID() {
    return Math.random().toString(36).substr(2, 9);
}

// Methods that aren't really usefull but they do things for test

/**
 * Wave
 * @function
 * @param {string} word
 * @returns {Array} Array with transformed strings
 * @description Passed a string and return that string in an
 * array where an uppercase letter is a person standing up.
 * Exp: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
 */
export const wave = word => [...word].map(
    (w, i) => `${word.substring(0, i)}${w.toUpperCase()}${word.substring(i + 1)}`,
).filter((e, i) => word[i] !== ' ');


/**
* String incrementer
* @function
* @param {string} str
* @returns {string} String incremented
* @description Function which increments a string, to create a new string.
* If the string already ends with a number, the number should be incremented by 1
* If the string does not end with a number. the number 1 should be appended to the new string.
* Exp: foobar000 -> foobar001
*/
export function incrementString(str) {
    return str.match(/(\d+)/g)
        ? str.replace(/(\d+)/g, x => `${+x + 1}`.padStart(x.length, 0))
        : `${str}1`;
}

/**
* Split Strings
* @function
* @param {string} str
* @returns {Array} Array with letter pairs
* @description Split the string into pairs of two characters.
* If the string contains an odd number of characters then it should
* replace the missing second character of the final pair with an underscore ('_').
* Exp: solution('abc') => ['ab', 'c_']
*/
export function splitString(str) {
    return (str.length % 2 ? `${str}_` : str).match(/../g);
}

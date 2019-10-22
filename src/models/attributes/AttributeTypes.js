/** @module attributes/AttributeTypes */

import AttributeTypes from '@/defaults/attributes/main';

/**
* Check is attribute has options
* @function
* @param {string} type
* @returns {boolean}
*/
export function hasOptions(type) {
    return type === AttributeTypes.SELECT || type === AttributeTypes.MULTI_SELECT;
}

/**
* Check is attribute has placeholder
* @function
* @param {string} type
* @returns {boolean}
*/
export function hasPlaceholder(type) {
    return (
        type === AttributeTypes.TEXT
        || type === AttributeTypes.TEXTAREA
        || type === AttributeTypes.NUMERIC
    );
}

/**
* Check is attribute has params
* @function
* @param {string} type
* @returns {boolean}
*/
export function hasParams(type) {
    return (
        type === AttributeTypes.IMAGE
        || type === AttributeTypes.PRICE
        || type === AttributeTypes.UNIT
        || type === AttributeTypes.DATE
    );
}

/**
* Returns options for attribute type
* @function
* @param {string} type
* @param {Object} data
* @returns {Array} Array with options
* @description TEST - Try use it.each
*/
export function getParamsOptionsForType(type, data) {
    switch (type) {
    case AttributeTypes.UNIT:
        return data.units;
    case AttributeTypes.DATE:
        return data.dateFormats;
    case AttributeTypes.PRICE:
        return data.currencies;
    case AttributeTypes.IMAGE:
        return data.imageFormats;
    default:
        return [];
    }
}

/**
* Returns icon name for attribute type
* @function
* @param {string} type
* @returns {string}
* @description TEST - Try use it.each
*/
export function getIcon(type) {
    switch (type) {
    case AttributeTypes.TEXT:
        return 'Text';
    case AttributeTypes.TEXTAREA:
        return 'Textarea';
    case AttributeTypes.NUMERIC:
        return 'Numeric';
    case AttributeTypes.SELECT:
        return 'Select';
    case AttributeTypes.MULTI_SELECT:
        return 'MultiSelect';
    case AttributeTypes.IMAGE:
        return 'Image';
    case AttributeTypes.PRICE:
        return 'Price';
    case AttributeTypes.UNIT:
        return 'Unit';
    case AttributeTypes.DATE:
        return 'Date';
    default:
        return '';
    }
}

/**
* Returns params key for attribute type
* @function
* @param {string} type
* @returns {string}
* @description TEST - Try use it.each
*/
export function getParamsKeyForType(type) {
    switch (type) {
    case AttributeTypes.DATE:
        return 'format';
    case AttributeTypes.UNIT:
        return 'unit';
    case AttributeTypes.PRICE:
        return 'currency';
    case AttributeTypes.IMAGE:
        return 'formats';
    default:
        return '';
    }
}

import {
    isArrayEqualToArray,
    arrayToObject,
    removeValueAtIndex,
    sumIntegers,
    insertValueAtIndex,
    lastElementInList,
    firstElementInList,
} from '@/models/arrayWrapper';


describe('arrayWrapper/isArrayEqualToArray', () => {
    it('Arrays are equal', () => {
        let arr1 = [1, 2, 3, 4];
        let arr2 = [1, 2, 3, 4];

        let areEqual = isArrayEqualToArray(arr1, arr2);

        expect(areEqual).toEqual(true);

        arr1 = [];
        arr2 = [];

        areEqual = isArrayEqualToArray(arr1, arr2);

        expect(areEqual).toEqual(true);
    });

    it('Arrays are not equal', () => {
        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3, 4];

        let areEqual = isArrayEqualToArray(arr1, arr2);

        expect(areEqual).toEqual(false);

        arr1 = [1];
        arr2 = [2, 3];

        areEqual = isArrayEqualToArray(arr1, arr2);

        expect(areEqual).toEqual(false);

        arr1 = [1, 2];
        arr2 = [2, 3];

        areEqual = isArrayEqualToArray(arr1, arr2);

        expect(areEqual).toEqual(false);
    });
});

describe('arrayWrapper/arrayToObject', () => {
    it('Mapping array with objects into object with key values', () => {
        const array = [
            {
                id: '1',
                name: 'Maciek',
                age: 12,
            },
            {
                id: '2',
                name: 'Adam',
                age: 13,
            },
            {
                id: '3',
                name: 'Piotrek',
                age: 21,
            },
        ];
        const keyField = 'id';
        const value = 'name';
        const result = arrayToObject(array, keyField, value);

        expect(result).toStrictEqual({
            1: 'Maciek',
            2: 'Adam',
            3: 'Piotrek',
        });
    });
});

describe('arrayWrapper/removeValueAtIndex', () => {
    it('Remove value from array by index - 0', () => {
        const array = [5, 3, 5, 8];
        const result = removeValueAtIndex(array, 0);

        expect(result).toEqual([3, 5, 8]);
    });

    it('Remove value from array by index - 3', () => {
        const array = [5, 3, 5, 8];
        const result = removeValueAtIndex(array, 3);

        expect(result).toEqual([5, 3, 5]);
    });

    it('Remove value from array by index - 100', () => {
        const array = [5, 3, 5, 8];
        const result = removeValueAtIndex(array, 100);

        expect(result).toEqual([5, 3, 5, 8]);
    });
});

describe('arrayWrapper/sumIntegers', () => {
    it('Summing array integers values', () => {
        const array = [1, 2, 3, -3, '3'];
        const result = sumIntegers(array);

        expect(result).toEqual(3);
    });

    it('Passed value is not an array', () => {
        const result = sumIntegers(null);

        expect(result).toEqual(0);
    });

    it('Passed empty value', () => {
        const result = sumIntegers();

        expect(result).toEqual(0);
    });
});

describe('arrayWrapper/insertValueAtIndex', () => {
    it('Inserting value at given index', () => {
        const array = [1, 2, 3, 0, -2, {}, 'ads'];
        const result = insertValueAtIndex(array, 5, 3);

        expect(result).toStrictEqual([1, 2, 3, 5, 0, -2, {}, 'ads']);
    });
});

describe('objectWrapper/lastElementInList', () => {
    it('Get last element from array', () => {
        const array = ['a', 't', 'p', 'q'];
        const fun = lastElementInList(array);
        expect(fun).toBe('q');
    });

    it('Get null from empty array', () => {
        const array = [];
        const fun = lastElementInList(array);
        expect(fun).toBeNull();
    });
});

describe('objectWrapper/firstElementInList', () => {
    it('Get last element from array', () => {
        const array = ['a', 't', 'p', 'q'];
        const fun = firstElementInList(array);
        expect(fun).toBe('a');
    });

    it('Get null from empty array', () => {
        const array = [];
        const fun = firstElementInList(array);
        expect(fun).toBeNull();
    });
});

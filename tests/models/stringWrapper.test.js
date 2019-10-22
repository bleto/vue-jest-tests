import {
    toCapitalize,
    capitalizeAndConcatenationArray,
    getUUID,
    wave,
    incrementString,
    splitString,
} from '@/models/stringWrapper';

describe('String operations', () => {
    it('Capitalize first letter', () => {
        const fun = toCapitalize('tEst');
        expect(fun).toBe('TEst');
    });

    it('Capitalize when no value', () => {
        const fun = toCapitalize();
        expect(fun).toBe('');
    });

    it('Capitalize first letter', () => {
        const strings = ['test', 'jest'];
        const fun = capitalizeAndConcatenationArray(strings);
        expect(fun).toBe('TestJest');
    });

    it('generate UUID', () => {
        const uuid = getUUID();
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(9);
    });
});

describe('Extra methods', () => {
    describe('Wave', () => {
        it.each([
            ['hello', ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']],
            ['', []],
            [' gap ', [' Gap ', ' gAp ', ' gaP ']],
        ])(
            ' Set string (%s) get array (%s)',
            (str, expected) => {
                const fun = wave(str);
                expect(fun).toStrictEqual(expected);
            },
        );
    });

    describe('Split string', () => {
        it.each([
            ['hello', ['he', 'll', 'o_']],
            ['abcd', ['ab', 'cd']],
            ['', null],
        ])(
            'Set string (%s) get array (%s)',
            (str, expected) => {
                const fun = splitString(str);
                expect(fun).toStrictEqual(expected);
            },
        );
    });

    describe('String incrementer', () => {
        it.each([
            ['foobar000', 'foobar001'],
            ['foo', 'foo1'],
            ['foobar001', 'foobar002'],
            ['foobar99', 'foobar100'],
            ['foobar099', 'foobar100'],
            ['', '1'],
        ])(
            ' Set string (%s) get (%s)',
            (str, expected) => {
                const fun = incrementString(str);
                expect(fun).toBe(expected);
            },
        );
    });
});

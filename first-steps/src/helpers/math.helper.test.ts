import { describe, expect, test } from 'vitest'
import { add, multiply, subtrac } from './mat.helper'


describe('pruebas para funcion add ', () => {


    test('should add tow positives numbers', () => {

        // ! 1 Arrange
        const a = 1;
        const b = 3;

        // ! 2 Act 
        const result = add(a, b);

        // ! Assert
        console.log(result)

        expect(result).toBe(a + b)
    });

});


describe('subtrac', () => {
    test('should subtrac two positive number', () => {

        const a = 1;
        const b = 2;

        const result = subtrac(a, b);

        console.log(result)
        expect(result).toBe(a - b)
    });

    test('should subtrac two negative number', () => {

        const a = -1;
        const b = -2;

        const result = subtrac(a, b);

        console.log(result)
        expect(result).toBe(a - b)
    });
});



describe('multiply', () => {
    test('should multiply two positive number', () => {

        const a = 1;
        const b = 2;

        const result = multiply(a, b);

        console.log(result)
        expect(result).toBe(a * b)
    });

    test('should multiply two negative number', () => {

        const a = -10;
        const b = 92;

        const result = multiply(a, b);

        console.log(result)
        expect(result).toBe(a * b)
    });
});
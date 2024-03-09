/* eslint-disable no-undef */
import { assert, expect } from 'chai';
import Calculator from '../calculator.js';

let calculator = new Calculator()

describe('Perform calculator checks', function() {
    it('Calculate sum', async() => {
    let sum = calculator.add(5, 4);
    expect(sum).equals(calculator.add(9));
    });

    it('Should return zero with empty input', async() => {
        let summEmpty = calculator.add();
        expect(summEmpty).equals(0);
    });

    it('Calculate subtraction', async() => {
       let sub= calculator.subtraction(100, 20)
        expect(sub).equals(80);
    });

    it('Calculate multiplication', async() => {
        let mult = calculator.multiply(3, 8);
        expect(mult).equals(24);
    });

    it('Calculate multiplication by zero', async() => {
        let zeroMultiply = calculator.multiply(3, 4, 0);
        expect(zeroMultiply).equals(0);
    });

    it('Calculate multiplication by string', async() => {
        let stringMultiply = calculator.multiply(1, 2, 'string');
        assert(isNaN(stringMultiply));
    });

    it('Should return one when use multiply with empty input', async() => {
        let multpEmpty = calculator.multiply();
        expect(multpEmpty).equals(1);
    });

    it('Calculate division', async() => {
        let div = calculator.divide(12, 4);
        expect(div).equals(3);
    });

    it('Calculate division by zero', async() => {
        let divideZero = calculator.divide(5, 0);
        expect(divideZero).equals(Infinity);
    });

    it('Calculate exponent', async() => {
        let exp = calculator.exponentiation(5);
        expect(exp).equals(25);
    });
})
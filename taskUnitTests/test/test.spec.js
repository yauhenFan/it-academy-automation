/* eslint-disable no-undef */
import { assert, expect } from 'chai';
import Calculator from '../calculator.js';

let calculator = new Calculator()

describe('Perform positive checks for add method', function() {
    [[5, 4], [5, -9], [5, 4, 3.2], [3.2, 2.5, 3.8], [2.5, 3.4, -6.4]].forEach((i) => {
        it('Calculate sum of numbers and fractions', async() => {
            let sum = calculator.add(...i);
            expect(sum).equals(i.reduce((a, b) => a + b, 0))
        });
    });
});

describe('Perform negative checks for add method', function() {
    it('Calculate sum with string', async() => {
        let sumWithString = calculator.add(...[3, 'String']);
        expect(sumWithString).equals('3String');
    });

    it('Calculate sum of numbers with NaN', async() => {
        let sumWithNaN = calculator.add(...[3, 4, NaN]);
        assert(isNaN(sumWithNaN));
    });

    it('Should return zero with empty input', async() => {
        let summEmpty = calculator.add();
        expect(summEmpty).equals(0);
    });
});

describe('Perform positive checks for multiply method', function() {
    [[3, 4], [3, 4, 0], [2, -2, 4], [3, 2, 3.4], [3.5, 2.5]].forEach((i) => {
        it('Multiply numbers and fractions', async() => {
            let multiplyResult = calculator.multiply(...i);
            expect(multiplyResult).equals(i.reduce((a, b) => a * b))
        });
    });
});

describe('Perform negative checks for multiply method', function() {
    it('Multiply by string', async() => {
        let stringMultiply = calculator.multiply(...[1, 2, 'string']);
        assert(isNaN(stringMultiply));
    });

    it('Should return one when use multiply with empty input', async() => {
        let multpEmpty = calculator.multiply();
        expect(multpEmpty).equals(1);
    });

    it('Multiply by NaN', async() => {
        let multNotNum = calculator.multiply(...[3, 4, NaN]);
        assert(isNaN(multNotNum));
    });
});

describe('Perform positive checks for subtraction method', function() {
    it('Calculate subtraction of positive numbers', async() => {
        let sub= calculator.subtraction(100, 20)
         expect(sub).equals(80);
     });

     it('Calculate subtraction with negative numnber', async() => {
        let subtrNegative = calculator.subtraction(-7, 20);
        expect(subtrNegative).equals(-27);
     });

     it('Calculate subtraction number with decimal', async() => {
        let subtrNumberDec = calculator.subtraction(10, 2.5);
        expect(subtrNumberDec).equals(7.5);
     });

     it('Calculate subtraction of fractions', async() => {
        let subtrFraction = calculator.subtraction(3.52, 2.5);
        expect(subtrFraction).equals(1.02);
     });

     it('Calculate subsctraction of negative fractions', async() => {
        let subtrNegativeFractions = calculator.subtraction(-2.5, -3);
        expect(subtrNegativeFractions).equals(0.5);
     });
});

describe('Perform negative checks for subtraction method', function() {
    it('Calculate subtraction by string', async() => {
        let subtrString = calculator.subtraction(3, 'string');
        assert(isNaN(subtrString));
    });

    it('Calculate subtraction with NaN', async() => {
        let subtrNotNumber = calculator.subtraction(5, NaN);
        assert(isNaN(subtrNotNumber));
    });

    it('Calculate subtraction with empty input', async() => {
        let subtrEmpty = calculator.subtraction();
        assert(isNaN(subtrEmpty));
    });
});


describe('Perform positive checks for devide method', function() {
    it('Devide numbers', async() => {
        let div = calculator.divide(12, 4);
        expect(div).equals(3);
    });

    it('Divide number by decimal', async() => {
        let divByDecimal = calculator.divide(5, 2.5);
        expect(divByDecimal).equals(2);
    });

    it('Divide fractions', async() => {
        let divFractions = calculator.divide(2.46, 1.23);
        expect(divFractions).equals(2)
    });
});

describe('Perform negative checks for devide method', async() => {
    it('Divide by zero', async() => {
        let divideZero = calculator.divide(5, 0);
        expect(divideZero).equals(Infinity);
    });

    it('Divide by string', async() => {
        let divByString = calculator.divide(3, 'string');
        assert(isNaN(divByString));
    });

    it('Divide by infinity', async() => {
        let divByInfinity = calculator.divide(5, Infinity);
        expect(divByInfinity).equals(0);
    });

    it('Divide with empty input', async() => {
        let divEmpty = calculator.divide();
        assert(isNaN(divEmpty));
    });
});


describe('Perform positive checks for exponentiation method', function() {
    it('Calculate exponent for numbers', async() => {
        let exp = calculator.exponentiation(5);
        expect(exp).equals(25);
    });

    it('Calculate exponent for decimals', async() => {
        let expDecimals = calculator.exponentiation(2.5);
        expect(expDecimals).equals(6.25)
    });

    it('Calculate exponent with negative number', async() => {
        let expNegative = calculator.exponentiation(-4);
        expect(expNegative).equals(16);
    });
});

describe('Perform negative checks for exponentiation method', function() {
    it('Calculate exponent for string', async() => {
        let expString = calculator.exponentiation('string');
        assert(isNaN(expString));
    });

    it('Calculate exponent with empty input', async() => {
        let expEmpty = calculator.exponentiation();
        assert(isNaN(expEmpty));
    });
});

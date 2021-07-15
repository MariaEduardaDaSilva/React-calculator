import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorService from './calculator.service';

describe('calculator service test', () => {
    const [calculate, concatanate, SUM, SUB, DIV, MUL] = CalculatorService();

    it('must guarantee a sum', () => {
        let sum = calculate(1, 4, SUM);
        expect(sum).toEqual(5);
    });
    it('must guarantee a subtraction', () => {
        let sub = calculate(4, 1, SUB);
        expect(sub).toEqual(3);
    });
    it('must guarantee a division', () => {
        let div = calculate(4, 1, DIV);
        expect(div).toEqual(4);
    });
    it('must guarantee a multiplication', () => {
        let mul = calculate(4, 1, MUL);
        expect(mul).toBe(4);
    });
    it('must return 0 to invalid operation', () => {
        let invalid = calculate(1, 4, '%');
        expect(invalid).toEqual(0);
    })
});
let sieve = require('../index.js');
describe('primeNumbersUpTo(n)', () => {
    [
        { n: 10, expected: [2, 3, 5, 7]},
        { n: 8, expected: [2, 3, 5, 7]},
        { n: 15, expected: [2, 3, 5, 7, 11, 13]},
        { n: 2, expected: [2]},
    ].forEach(data => {
        it("finds all prime numbers from 2 to n", () => {
            expect(sieve.primeNumbersUpToN(data.n)).toStrictEqual(data.expected);
        })
    })

    it('throws an error if n < 2', () => {
        let n = 1;
        expect(() => sieve.primeNumbersUpToN(n)).toThrow(new Error("n must be an integer greater than 2"))
    })
    it('throws an error if n is a decimal number', () => {
        let n = 1;
        expect(() => sieve.primeNumbersUpToN(1.1)).toThrow(new Error("n must be an integer greater than 2"))
    })


})
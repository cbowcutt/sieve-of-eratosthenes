module.exports = {
    /**
     * @param n: an integer > 2
     * @returns an ordered array of all prime integers from 2 to n
     * @throws Error if n is less than 2 or if n is not a whole number
     */
    primeNumbersUpToN: (n) => {
        if (n < 2 || n % 1 != 0) {
            throw new Error("n must be an integer greater than 2");
        }
        let primeNumbers = [];
        let sequence = [];
        for (let i = 0; i <= n; i++) {
            sequence[i] = true;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
           if  (sequence[i] == true) {
            let i_squared = i * i
            for (let j = i_squared; j <= n; j += i) {
                sequence[j] = false;
            }
           }

        }
        for (let i = 2; i <= n; i++) {
            if (sequence[i] == true) {
                primeNumbers.push(i);
            }
        }
        return primeNumbers;

    } 
}
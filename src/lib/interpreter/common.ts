export const arithmeticOperators = [
    '+', '-', '*', '/', '(', ')'
]

export const arithFunctions = {
    '+': (...args: any) => {
        let value = 0;
        for(const i in args) {
            value += args[i];
        }

        return value;
    }
}
export const arithmeticOperators = [
    '+', '-', '*', '/', '(', ')'
]

export const arithFunctions = {
    '+': (a: number, b: number) => {
        return a + b;
    },
    '-': (a: number, b: number) => {
        return a - b;
    },
    '*': (a: number, b: number) => {
        return a * b;
    },
    '/': (a: number, b: number) => {
        return a / b;
    }
}
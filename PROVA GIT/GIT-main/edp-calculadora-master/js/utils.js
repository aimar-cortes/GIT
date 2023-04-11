export function calculate(a, b, op) {
    if(op === '+') {
        return a + b;
    }
    if(op === '-') {
        return a - b;
    }
    if(op === '*') {
        return a * b;
    }
    if(op === '/') {
        return a / b;
    }
}
const { add } = require('./index');

if (add(2, 3) !== 5) {
    throw new Error('add() failed');
}

console.log('Test passed')
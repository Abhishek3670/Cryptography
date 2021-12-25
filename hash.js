import { createHash } from 'crypto';

// create a string hash

function hash(input){
    return createHash('sha256').update(input).digest('base64');
}

// Compare two hashed password

let password = 'Hello world!';
const hash1 = hash(password);
console.log(hash);

password = 'Hello world'
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match ? 'good password' : 'password does not match');


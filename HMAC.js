// hash based message authentication code

const { createHmac, } = require ('crypto');

const msg = 'hello world!';
const key1 = 'shared-key-1';

const hmac = createHmac('sha256' , key1).update(msg).digest('hex');

console.log(hmac);

const key2 = 'shared-key-2';
const hmac2 = createHmac('sha256' , key2).update(msg).digest('hex');
 
console.log(hmac2);
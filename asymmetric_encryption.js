const { publicEncrypt , privateDecrypt } = require('crypto');
const { publicKey , privateKey } = require('./public_cryptosystem');

const msg = "Hello World!";

const encrpytedData = publicEncrypt(
    publicKey,
    Buffer.from(msg)
);

console.log(encrpytedData.toString('hex'))

const decryptedData = privateDecrypt(
    privateKey,
    encrpytedData
);

console.log(decryptedData.toString('utf-8'));
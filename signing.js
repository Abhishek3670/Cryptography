const { createSign , createVerify } = require ('crypto');
const { publicKey , privetKey} = require('./public_cryptosystem');

const msg = 'this data must be signed';

// SIGN

const signer = createSign('rsa-sha256');

signer.update(msg);

const signature = signer.sign(privetKey , 'hex');

// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(msg);

const isVerified = verifier.verify(publicKey , signature , 'hex');
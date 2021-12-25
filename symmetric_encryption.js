const{createCipheriv , randomBytes , createDecipheriv} = require('crypto');

const msg = 'Hello world!';
const key = randomBytes(32);
const iv = randomBytes(16);


// Encrypt
const cipher = createCipheriv('aes256' , key ,iv);
const encrpytedMsg = cipher.update(msg , 'utf8', 'hex') + cipher.final('hex');
console.log("Encryted message : " + encrpytedMsg);

// Decrypt
 const decipher = createDecipheriv('aes256' , key , iv);
 const decryptedMessage = decipher.update(encrpytedMsg , 'hex' , 'utf-8') + decipher.final('utf8');
console.log("Decrypted message : " + decryptedMessage);

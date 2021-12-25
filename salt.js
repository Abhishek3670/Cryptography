const { scryptSync , randomBytes } = require('crypto');
const timingSafeEqual = require('compare-timing-safe');

email = 'aatish3670@gmail.com' ;
password = 'qwerty12345';


function signUp(email,password) {
    const salt = randomBytes(16).toString('hex');
    const hashedpassword = scryptSync(password, salt, 64).toString('hex');
    const user = { email , password: `${salt}:${hashedpassword}`}

    return(user)
}

function login(email, password) {
    // const user = users.find(v => v.email === email);
    const user = signUp(email , password)
    const [salt , key] = user.password.split(':');
    const hashedpassword = scryptSync(password , salt , 64);

    const keyBuffer = Buffer.from(key , 'hex');
    const match = timingSafeEqual(hashedpassword , keyBuffer)

    if(match){
        return 'login success!'
    }else {
        return 'login fail!'
    }


}


console.log(signUp(email , password));
console.log(login(email , password));
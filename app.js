const charSet = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ123456789!@#$%^&*()';

const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}

const passwordLength = (event) => {
    // console.log(event.target.value)
    getElement('char-count').innerText = event.target.value;
    generatePassword()
}
// eye
const eye = () => {
    const password = getElement('password');
    password.classList.toggle('overlay')
}

// getting elements 
const password = getElement('password');

const generatePassword = () => {
    const length = getElement('char-count');
    let pass = '';
    for(let i = 0; i < length.innerText; i++){
        const index = ( Math.floor(Math.random() * charSet.length));
        // console.log(charSet[index])
        pass = pass + charSet[index];
    }
    password.innerText = pass;
}
const copyPassword = () => {
    navigator.clipboard.writeText(password.innerText);
}
generatePassword()
import throttle from 'lodash.throttle';

const localKey = 'feedback-form-state';


form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500))
form.addEventListener('submit', onFormSubmit)

let dataForm JSON.parse(localStorage.getItem(localKey))||{};
const {email, message} = form.elements;
reloadPage();
function onInputData(e){
    dataForm = {email:email.value, message:message.value}
    localStorage.setItem(localKey, JSON.stringify(dataForm))
}
function reloadPage() {
    if(dataForm){
        email.value = dataForm.email||'';
        message.value= dataForm.message||'';
    }
}
function onFormSubmit(e){
    e.preventDefault()
    console.log({email:email.value, message:message.value})
    if(email.value===''|| message.value===''){
        return alert('Please fill in all the fields!')
    }
    localStorage.removeItem(localKey);
e.currentTarget.reset();
dataForm = {};
}


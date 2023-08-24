import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css';

const EMPTY_INPUT_MSG = 'empty-input-msg';
const EMPTY_INPUT = 'empty-input'
const nameRegExp = /^[A-Z]/;
const emailRegExp = /(\w+)\@(gmail|yahoo)\.com\b/;

let users = [];
class UserDetails{
    constructor(FName, LName, Email, Password){
        this.FName = FName;
        this.LName = LName;
        this.Email = Email;
        this.Password = Password;
    }
}
function userInputValidation(){
    const firstName = document.getElementById('firstName');
    const firstNameValue = firstName.value;
    const lastName = document.getElementById('lastName');
    const lastNameValue = lastName.value;
    const email = document.getElementById('email')
    const emailValue = email.value;
    const password = document.getElementById('password')
    const passwordValue = password.value;
    const emptyFName = document.querySelector('.empty-firstname');
    const emptyLName = document.querySelector('.empty-lastname');
    const emptyEmail = document.querySelector('.empty-email');
    const emptyPassword = document.querySelector('.empty-password');

    if(
        !firstNameValue ||
        !lastNameValue ||
        !emailValue ||
        !passwordValue
    ){
        if(!firstNameValue){
        emptyFName.classList.add(EMPTY_INPUT_MSG);
        emptyFName.innerText = 'First Name cannot be empty';
        firstName.classList.add(EMPTY_INPUT);
        }
        if(!lastNameValue){
        emptyLName.classList.add(EMPTY_INPUT_MSG);
        emptyLName.innerText = 'Last Name cannot be empty';
        lastName.classList.add(EMPTY_INPUT)
        }
        if(!emailValue){
        emptyEmail.classList.add(EMPTY_INPUT_MSG);
        emptyEmail.innerText = 'Email cannot be empty';
        email.classList.add(EMPTY_INPUT);
        }
        if(!passwordValue){
        emptyPassword.classList.add(EMPTY_INPUT_MSG);
        emptyPassword.innerText = 'Password cannot be empty';
        password.classList.add(EMPTY_INPUT);
        }
        return -1;
    } else {
        emptyFName.classList.remove(EMPTY_INPUT_MSG);
        emptyFName.innerText = '';
        firstName.classList.remove(EMPTY_INPUT);
        emptyLName.classList.remove(EMPTY_INPUT_MSG);
        emptyLName.innerText = '';
        lastName.classList.remove(EMPTY_INPUT)
        emptyEmail.classList.remove(EMPTY_INPUT_MSG);
        emptyEmail.innerText = '';
        email.classList.remove(EMPTY_INPUT);
        emptyPassword.classList.remove(EMPTY_INPUT_MSG);
        emptyPassword.innerText = '';
        password.classList.remove(EMPTY_INPUT);
        const user = new UserDetails(firstNameValue, lastNameValue, emailValue, passwordValue);
        users.push(user);
        console.log(users);
        return 1;
    }
}

const Landing = () =>{
    const navigate = useNavigate();
    const termsConditionsRedirect = ()=>{
        navigate('/terms-conditions')
    }
    const thankYouRedirect = () => {
        navigate('/thank-you');
    }
    return (
    <div className='App-landing-page'>
        <div className='App-description-column'>
            <h2>Learn to code by watching others</h2>
            <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable. 
            </p>
        </div>
        <div className='App-card-column'>
            <div className='App-offer-name'>
            <p>
            <span id='offerText'>Try it free 7 days</span> then $20/mo. thereafter
            </p>
            </div>
            <div className='App-inputs'>
            <input type="text" placeholder='First Name' className='App-input' id='firstName'/>
            <p className='empty-firstname'></p>
            <input type="text" placeholder='Last Name' className='App-input' id='lastName'/>
            <p className='empty-lastname'></p>
            <input type="text" placeholder='Email' className='App-input' id='email'/>
            <p className='empty-email'></p>
            <input type="password" placeholder='Password' className='App-input' id='password'/>
            <p className='empty-password'></p>
            <button type="submit" onClick={()=>{
                const res = userInputValidation();
                if(res == 1){
                    thankYouRedirect();
                }
            }}>CLAIM YOUR FREE TRIAL</button>
            <p id='footerText'>By clicking the button, you are agreeing to our <a href="#" onClick={termsConditionsRedirect}>Terms and Services</a></p>
            </div>
        </div>
    </div>
    );
}

export default Landing;
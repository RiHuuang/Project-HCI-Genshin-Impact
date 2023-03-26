const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const iconCloseregis = document.querySelector('.form-box.register .icon-close');
const iconCloselogin = document.querySelector('.form-box.login .icon-close');
const loginLink = document.querySelector('.login-link');



registerLink.addEventListener('click', () =>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () =>{
    wrapper.classList.remove('active');
});



const inputUser = document.getElementById("inputUser")
const inputUserLogin = document.getElementById("inputUserLogin")
const inputPassword = document.getElementById("inputPassword")
const inputPasswordLogin = document.getElementById("inputPasswordLogin")
const confirmpass = document.getElementById("confirmpass")
const inputNumber = document.getElementById("inputNumber")
const inputEmail = document.getElementById("inputEmail")
const inputAge = document.getElementById("inputAge")

const registerSubmit = document.getElementById("register-btn")
const loginSubmit = document.getElementById("login-btn")
const registerError = document.getElementById("registerError")
const loginError = document.getElementById("loginError")
const tnc = document.getElementById("tnc")

const asynchronous = document.getElementById("asynchronous")



registerSubmit.addEventListener("click", (event)=>{
    console.log("masuk pas pencet-reg");
    event.preventDefault();

    var errorText = "";
    
    const email = inputEmail.value;
    const user = inputUser.value;
    const password = inputPassword.value;
    const confirmpassword = confirmpass.value;
    const Age  = inputAge.value;


    console.log(Age);
    console.log(user);
    console.log(password);
    console.log(confirmpassword);
    console.log(email);
    

    if(Age < 17 ){
        errorText = "The age doesn't fulfill the requirement"
    }
    if(confirmpassword != password){
        errorText = "The password doesn't match"
    }
    if(password.length < 8 ){
        errorText = "Password must contain minimum of 8 character"
    }
    if(!email.includes("@gmail.com")){
        errorText = "email needs to be @gmail.com"
    }
    if(!user.includes(' ')){
        errorText = "Username atleast needs to be 2 words" 
    }

    let isChecked = false;

    tnc.addEventListener('change', () => {
        isChecked = tnc.checked;
        console.log('Checkbox is checked:', isChecked);
    });


    registerError.innerText = errorText;

})

loginSubmit.addEventListener("click", (event)=>{
    console.log("masuk pas pencet login");
    event.preventDefault();

    var errorText = "";
    
    const user = inputUserLogin.value;
    const password = inputPasswordLogin.value;

    
    if(password != user){
        errorText = "The username / password is wrong"
    }

    if(password.length < 8 ){
        errorText = "Password must contain minimum of 8 character"
    }

    if(!user.includes(' ')){
        errorText = "Username atleast needs to be 2 words" 
    }


    loginError.innerText = errorText;
    // console.log(divError.innerText);
    
})



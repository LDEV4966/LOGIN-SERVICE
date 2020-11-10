const idContainer = document.querySelector(".id");
const pwdContainer = document.querySelector(".pwd");
const loginContainer = document.querySelector(".login-Btn");
const saveIdBox =document.querySelector(".check-box-form .save-ID");
const signUpCtn = document.querySelector(".abs-Btn .sign-up");
function isUser(id,pwd){
    
}
function checkedHP(){//it is fired when the 'Hide_password check box' is checked by Onclick function
    const hidePwdBox =document.querySelector(".check-box-form .hide-PWD");
    if(hidePwdBox.checked){
        pwdContainer.type = "password";
    }else{
        pwdContainer.type = "text";
    }
}
function handleLogin(event) {
    id = idContainer.value;
    pwd = pwdContainer.value;
    event.preventDefault();
    if(saveIdBox.checked){
        pwdContainer.value="";
    }
    else{
        idContainer.value = "";
        pwdContainer.value="";
    }
    isUser(id,pwd);
    
}
function handleSignUp(event){
    location.href = "signup.html";
}
function init(){
    signUpCtn.addEventListener("click",handleSignUp);
    loginContainer.addEventListener("click",handleLogin);
    console.log(loginContainer);
} 
init();



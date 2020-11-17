const idContainer = document.querySelector(".id");
const pwdContainer = document.querySelector(".pwd");
const loginContainer = document.querySelector(".login-Btn");
const saveIdBox =document.querySelector(".check-box-form .save-ID");
const signUpBtn = document.querySelector(".abs-Btn .sign-up");
const findInfoBtn = document.querySelector(".abs-Btn .find-info");
function isUser(id,pwd){
    const loadedToUsers = localStorage.getItem("users");
    let flag = 0;
    if(loadedToUsers == null){
        Swal.fire("가입된 아이디 정보가 없습니다.");
        if(!saveIdBox.checked){
            idContainer.value="";
        }
        return ;
    }
    else{
        const parsedUsersList = JSON.parse(loadedToUsers);
        parsedUsersList.forEach(function printUser(loadedUser){ //forEach 내에서 부모의 변수값 사용가능
            
            const parsedUser = JSON.parse(loadedUser);
            console.log(id,pwd);
            console.log(parsedUser.id,parsedUser.pwd);
            if(id == parsedUser.id){ //중복됨
                flag=1;
                if(pwd == parsedUser.pwd)
                {
                    Swal.fire({
                        icon: 'success',
                        title: `안녕하십니까 ${parsedUser.name}님.`,
                        showConfirmButton: false,
                        timer: 1500
                      }).then(function changeHtml(){
                        localStorage.removeItem("super-user");//현재 로그인된 유저로 superuser교체
                        localStorage.setItem("super-user",JSON.stringify(parsedUser));
                        location.href = "./final/final.html";
                      });
                    
                    return;
                }

                Swal.fire("비밀번호가 일치하지 않습니다.");
                return;
            }
        });
    }
    if(flag == 0)
    {
        Swal.fire("가입된 아이디 정보가 없습니다.");
        if(!saveIdBox.checked){
            idContainer.value="";
        }
    }
    return ;

    
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
    pwdContainer.value="";
    isUser(id,pwd);
    return;
}
function handleSignUp(event){
    location.href = "./signUp/signUp.html";
}
function handleFindInfo(event){
    location.href = "./findUserInfo/findUserID.html";
}
function init(){
    signUpBtn.addEventListener("click",handleSignUp);
    findInfoBtn.addEventListener("click",handleFindInfo);
    loginContainer.addEventListener("click",handleLogin);
} 
init();



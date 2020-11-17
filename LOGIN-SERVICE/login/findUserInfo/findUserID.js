const nameContainer = document.querySelector(".name-txt");
const emailContainer = document.querySelector(".email-txt");
const birthContainer = document.querySelector(".birth-txt");
const idContainer =  document.querySelector(".id-txt");
const btn = document.querySelector(".btn");
function birthRestrict(){
    
    if(JSON.stringify(birthContainer.value).length-2 != 6)
    {
        birthContainer.style.borderColor = "red";
    }
    else{
        birthContainer.style.borderColor = "#d4d4d4";
    }
}
function showError(){
    Swal.fire({
        icon: 'error',
        title: '가입된 회원정보가 없습니다',
        text: '다시 입력해주세요',
        confirmButtonColor:  '#615f5f' ,
        confirmButtonText: `확인`,
      });
}
function showSuccess(userName,title,userinfo){
    Swal.fire({
        title: `${userName} 회원님의 ${title} : ${userinfo}`,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: `로그인 하기`,
        cancelButtonColor:  '#615f5f' ,
        cancelButtonText : `닫기`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            location.href = "../login.html";}
        else{
            location.href = `findUser${title}.html`;
        }
      });
}
function compareData(){
    let flag = 0;
    const loadedUsersList = localStorage.getItem("users");
    const userName = nameContainer.value;
    const userEmail = emailContainer.value;
    const userBirth = birthContainer.value;
    let userId="",userPwd="";
    if(idContainer != null){
        userId = idContainer.value;
    }
    if(loadedUsersList == null){
        showError();
    }
    else{
        const paredUsersList = JSON.parse(loadedUsersList);
        paredUsersList.forEach(function checkUser(loadedUser){
            if(flag == 1){
                return;
            }
            const parsedUser = JSON.parse(loadedUser);
            if(userId != "")
            {
                if(parsedUser.id != userId){return;}
            }
            if(userName == parsedUser.name){
                    if(userEmail == parsedUser.email)
                    {
                        const parsedUserBirth = JSON.parse(parsedUser.birth);
                        let birthCombine = parsedUserBirth.yy.substring(2,4).concat(parsedUserBirth.m).concat(parsedUserBirth.d);
                        if(userBirth == birthCombine){
                            flag  = 1;
                            userId = parsedUser.id;
                            userPwd = parsedUser.pwd;
                            return;
                        }
                        else{
                            return;
                        }
                    }
                    else{
                        return
                    }
            }else{
                return;
            }
        });
    }
    if(flag){
        if(idContainer == null){
            showSuccess(userName,"ID",userId);
        }
        else{
            showSuccess(userName,"PWD",userPwd);
        }
    }
    else{
        showError();
    }

}
function handleBtn(event){
    compareData();
}
function init(){
     btn.addEventListener("click",handleBtn);
}
init();
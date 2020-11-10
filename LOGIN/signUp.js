const idContainer = document.querySelector(".id");
const pwdContainer = document.querySelector(".pwd");
const pwdCheckContainer = document.querySelector(".pwd-check");
const nameContainer = document.querySelector(".name");
const years = document.querySelector(".years");
const months = document.querySelector(".months");
const days = document.querySelector(".days");
const genderContainer = document.querySelector(".gender");
const idOverlapCheck = document.querySelector(".id-check-img");
function showComplete(){
    Swal.fire({
        icon: 'success',
        title: '회원가입 되웠습니다.',
        showConfirmButton: false,
        timer: 1500
      }).then(function changeHtml(){
        location.href = "login.html";
      });
    return;      
}
function showAlert(text)
{
    Swal.fire(`${text} 을(를) 확인하세요`);
    return;
}
function saveUserInfo(user){
    const loadedToUsers = localStorage.getItem("users");
    const userToStr = JSON.stringify(user);
    if( loadedToUsers == null){
        let users = [];
        users.push(userToStr)
        localStorage.setItem("users", JSON.stringify(users));
    }
    else{
        const usersList = localStorage.getItem("users");
        parsedUsersList = JSON.parse(usersList);
        parsedUsersList.push(userToStr);
        localStorage.setItem("users",JSON.stringify(parsedUsersList));
    }

    //회원가입이 완료 되었습니다
    showComplete();
    return;
}
function changeIOC(event){
    idOverlapCheck.innerHTML = "";
}
function id_overlap_check(event){

    
    if (idContainer.value == ""){
        Swal.fire("아이디를 입력하세요.");
        return;
    }
    if(idOverlapCheck.innerHTML == "✔"){

        Swal.fire("이미 중복확인을 완료했습니다.");
        return;
    }
    
    idOverlapCheck.innerHTML = "✔";
    
}
function handleLogin(event){

    //error있을 시 알림 박스띄우기
    // 해당 ps-box 테두리 빨강색으로 바꾸고 다시 로그인버튼 누를시 문제없으면 원래색으로 돌리기
    if (idContainer.value == "")
    {
        showAlert("아이디");
        console.log("id is empty");
        return;
    }

    if (pwdContainer.value == "")
    {
        showAlert("비밀번호");
        console.log("pwd is empty");
        return;
    }

    if (pwdCheckContainer.value == "")
    {
        showAlert("비밀번호 재확인");
        console.log("pwd-check is empty");
        return;
    }else{
        
        if(pwdCheckContainer.value != pwdContainer.value){
            
            showAlert("비밀번호와 비밀번호 재확인 일치");
            console.log("pwd,pwd-check is NOT same");
            return;
        }
    }
    
    if(nameContainer.value == "")
    {
        showAlert("이름");
        console.log("name is empty");
        return;
    }
    if(years.value == "")
    {   
       showAlert("생년연도의 '년(4자)'");
       console.log("years is empty");
       return;
    }
    if(months.value == "월")
    {   
       showAlert("생년연도의 '월'");
       console.log("month is empty");
       return;
    }
    if(days.value == "")
    {   
        showAlert("생년연도의 '일'"); 
       console.log("days is empty");
       return;
    }
    if(genderContainer.value == "성별"){
        showAlert("성별");
        console.log("gender is empty");
        return;
    }
    const birthInfo = {
        yy: years.value,
        m : months.value,
        d : days.value
    };
    const birthToStr = JSON.stringify(birthInfo);
    const user = {
        id : idContaier.value,
        pwd : pwdContainer.value,
        name : nameContainer.value,
        birth : birthToStr,
        gender : genderContainer.value 
    };
    saveUserInfo(user); // localstorage에 저장
}
function init(){
   return;
}
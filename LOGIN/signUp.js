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
        title: `${nameContainer.value}님 회원가입 되었습니다.`,
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
        parsedUsersList = JSON.parse(loadedToUsers);
        parsedUsersList.push(userToStr);
        localStorage.setItem("users",JSON.stringify(parsedUsersList));
    }
    //회원가입이 완료 되었습니다
    showComplete();
    return;
}
function changeIOC(event){ // 중복확인후 아이디가 바뀌면 onchange로 실행됨
    if(idOverlapCheck.classList.contains("active")){
        idOverlapCheck.innerHTML = "";
        idOverlapCheck.classList.replace("active","non-active");
    }
    return;
}
function checkIdOverlap(){
    const compId = idContainer.value;
    const loadedToUsers = localStorage.getItem("users");
    let flag = 0;
    if(loadedToUsers == null){
        return flag;
    }
    else{
        const parsedUsersList = JSON.parse(loadedToUsers);
        parsedUsersList.forEach(function printUser(loadedUser){ //forEach 내에서 부모의 변수값 사용가능
            const parsedUser = JSON.parse(loadedUser);
            if(compId == parsedUser.id){ //중복됨
                flag = 1;
                return;
            }
        });
    }
    return flag;

}
function id_overlap_check(event){// 중복확인을 해줌

    let overlapFlag = 0;
    const regTypeId1 = /[A-Z]/;
    const regTypeId2 = /[a-z0-9~!@#$%^&*()_+|<>?:{}]{5,20}/; 
    if(idOverlapCheck.classList.contains("active")){
        Swal.fire("이미 중복확인을 완료했습니다.");
        return;
    };
    if (regTypeId1.test(idContainer.value)||!regTypeId2.test(idContainer.value) ){
        showAlert("아이디 규약");
        return;
    }
    //DB로 확인해주는 과정이 필요 진짜없으면 밑에 라인 실행, 아니면 중복된 아이디가 있다고 알려줘야함
    overlapFlag = checkIdOverlap();//Based on localStorage
    if(overlapFlag == 0)
    {
        Swal.fire("중복된 아이디가 없습니다.");
        idOverlapCheck.classList.replace("non-active","active");
        idOverlapCheck.innerHTML = "✔";
        return;
    }
    else{
        Swal.fire("중복된 아이디가 존재합니다.");
        return;
    }
    

}
function handleLogin(event){

    //error있을 시 알림 박스띄우기
    // 해당 ps-box 테두리 빨강색으로 바꾸고 다시 로그인버튼 누를시 문제없으면 원래색으로 돌리기
    const regTypePwd = /[A-Za-z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/; // test : 주어진 문자열 str 중 정규 표현식이 일치하는 부분이 있으면 true, 아니면, false.
    const regTypeYears = /[0-9]{4}/; 
    const regTypeDays = /[0-9]{1,2}/; 
    if(idOverlapCheck.classList.contains("non-active")){
        Swal.fire("아이디 중복확인을 해주세요.");
        return;
    };

    if (!regTypePwd.test(pwdContainer.value))
    {
        showAlert("비밀번호 규약");
        console.log("pwd is empty");
        return;
    }

    if (!regTypePwd.test(pwdCheckContainer.value))
    {
        showAlert("비밀번호 재확인 규약");
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
    if(years.value == "" || !regTypeYears.test(years.value))
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
    if(days.value == "" || !regTypeDays.test(days.value))
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
        id : idContainer.value,
        pwd : pwdContainer.value,
        name : nameContainer.value,
        birth : birthToStr,
        gender : genderContainer.value 
    };
    saveUserInfo(user); // localstorage에 저장
    showComplete();
}
function init(){
   return;
}
const parsedUser = JSON.parse(localStorage.getItem("super-user"));
const logOutBtn = document.querySelector(".logout-btn");
const hiMessage = document.querySelector(".hi-message");
const emailContainer = document.querySelector(".email"); 
const idContainer = document.querySelector(".id");
const pwdContainer = document.querySelector(".pwd");
const nameContainer = document.querySelector(".name");
const birthContainer = document.querySelector(".birth");
const genderContainer = document.querySelector(".gender");
function animateCSS(element, animationName) {

    const node = element;
    node.classList.add('animated', animationName);
    node.style.animationDuration = "4s";
    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
}
function logOutHandling(event){
    Swal.fire({
        icon: 'success',
        title: `${parsedUser.name}님계정이 로그아웃 되었습니다.`,
        showConfirmButton: false,
        timer: 1500
      }).then(function changeHtml(){
        localStorage.removeItem("super-user");//현재 로그인된 유저로 superuser교체
        location.href = "../login.html";
      });
}
function showUserInfo(){
    const UserInfoBtn = document.querySelector(".user-info-btn");
    const UserInfoContents = document.querySelector(".user-info-contents");
    if(UserInfoContents.style.display === 'none')
    {
        UserInfoBtn.value = "사용자 정보 가리기"
        UserInfoContents.style.display = "block";
    }else{
        UserInfoBtn.value = "사용자 정보 보기"
        UserInfoContents.style.display = 'none';
    }
}
function fillUserInfo(){
    const birth = JSON.parse(parsedUser.birth); 
    let hidenPwd = parsedUser.pwd.substring(0,parsedUser.pwd.length-5).concat("*****");
    emailContainer.innerHTML = `${parsedUser.email}`;
    idContainer.innerHTML = `${parsedUser.id}`;
    pwdContainer.innerHTML = `${hidenPwd}`;
    nameContainer.innerHTML = `${parsedUser.name}`;
    birthContainer.innerHTML = `${birth.yy}년 ${birth.m}월 ${birth.d}일`;
    genderContainer.innerHTML = `${parsedUser.gender}`;
}
function setHiUser(){

    hiMessage.innerHTML = `${parsedUser.name}님의 계정이 현재 로그인 상태입니다.`
    animateCSS(hiMessage,'flash');
}
function init(){
    if(parsedUser == null){
        location.href = "../login.html";
    }
    setHiUser();
    fillUserInfo();
}
init();



/*function showUserInfo(){
    const UserInfoBtn = document.querySelector(".user-info-btn");
    const UserInfoContents = document.querySelector(".user-info-contents");
    if(UserInfoContents.style.visibility === 'hidden')
    {
        UserInfoBtn.value = "사용자 정보 가리기"
        UserInfoContents.style.visibility = "visible";
    }else{
        UserInfoBtn.value = "사용자 정보 보기"
        UserInfoContents.style.visibility = "hidden";
    }
}
*/
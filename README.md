# LOGIN-SERVICE

### A basic login management system bulit in Js , html , css with the following features :


* Every informations of User is stored in Localstorage 
* New User can sign up by comparing other user informations
* Login service after the sign up
* Can Find user account
* After login, user can see his own information and log-out


-----------------------------------

### component :
  
> Project is composed of 4 directory.
> > ( **signUp , finduserInfo , final** ) are located in (**login**) subdirectory


### details :

* **Login-page** 
  
<div>
  <img width = "500px" height= "500px" src ="https://user-images.githubusercontent.com/40168455/99412584-422bb480-2938-11eb-9129-7db4ba52c106.png">
</div>  
  
  
  
> user can login,signUp,findUserInfo in this page.  
  
* **signUp-page**
  
<div>
<img width = "500px" height= "800px" src ="https://user-images.githubusercontent.com/40168455/99418374-4e1a7500-293e-11eb-9d85-4e0817d42e8e.png">
</div>  
  
  
  
> user can sign up and save user information to localStorage  
  
  
* **findUSerInfo-page**
  
<div>
<img width = "800px" height= "500px" src ="https://user-images.githubusercontent.com/40168455/99418386-51adfc00-293e-11eb-89f5-fbe1ce045cd9.png">
</div>
  
  
  
> user can find userID,userPwd by filling the requested blanks and change the page using side bar
  
  
 * **final-page**
   
<div>
<img width = "500px" height= "500px" src ="https://user-images.githubusercontent.com/40168455/99418690-a2255980-293e-11eb-95d7-e7fa015b28eb.jpg">
</div>
  
  
  
> this page show login status and user-info by clicking 'showUserInfo-button'
  
  
  
  

-----------------------------------

### Shortcomings :
  
  
 1. I felt a limitation in that I could not directly implement the DB(user-info) on the server because I used the localstorage on Browser.
 
 2. While trying to add a mobile phone or e-mail authentication function in the process of finding user-ID,PWD, it failed

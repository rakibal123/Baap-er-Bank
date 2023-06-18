document.getElementById("btn-submit").addEventListener("click",function(){
   //get the email address
   const emailField=document.getElementById("user-email");
   const email=emailField.value;
   console.log(email);
   //get password as well

   const passwordField=document.getElementById("user-password");
   const password=passwordField.value;
   console.log(password);
   //verify email and  password
   if(email==='sontan@baap.com' && password==='secret'){
     window.location.href="Bank.html";
   }

   else{
  alert("you are just a useless fellow , who could't remember his password.")
   }
});


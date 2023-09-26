function Answer(){
  
  var password = document.getElementById("flowerquestion");
  
  var passwordText = 
password.value.toUpperCase();
  if(passwordText== "TULIPS" ) {
    return true;
   }
   alert("try again!");
   return false;

}
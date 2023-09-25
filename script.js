function Answer(){
  
  var password = document.getElementById("flowerquestion");
  
  var passwordText = 
password.value.toUpperCase();
  if(passwordText== "tulips" ) {
    return true;
   }
   alert("try again!");
   return false;

}
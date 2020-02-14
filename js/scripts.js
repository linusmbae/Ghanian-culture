

function myFunction() {
  let showday=document.getElementById("siku");
  let showmonth=document.getElementById("Month");
  let showcc=document.getElementById("cc");
  let showyear=document.getElementById("year");
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let males = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  let females = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

  if (!showday.checkValidity())
   {
     document.getElementById("dvalidity").innerHTML = "rectify your date";
     alert("invalid date");
   } else if (!showmonth.checkValidity())
   {
     document.getElementById("mvalidity").innerHTML = "rectify your date";
     alert("invalid date");
   }
   else {
     document.getElementById("dvalidity").innerHTML = "";
     document.getElementById("mvalidity").innerHTML = "";
   };



};

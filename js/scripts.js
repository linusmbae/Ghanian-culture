

function myFunction() {
  let showday=document.getElementById("siku");
  let showmonth=document.getElementById("Month");
  let showcc=document.getElementById("cc");
  let showyear=document.getElementById("year");
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let males = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  let females = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

  let dayOfTheWeek = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (birthMonth + 1) / 10)) + dayOfBirth) % 7);

      dayOfTheWeek = parseInt(dayOfTheWeek);
      dayOfBirth=parseInt(dayOfBirth);


      if (dayOfTheWeek == 0 && female) {
          bornDay = days[0];
          akanName = femaleAkanNames[0];
       }
       else if (dayOfTheWeek == 0 && male) {
          bornDay = days[0];
          akanName = maleAkanNames[0];
      }
      else if (dayOfTheWeek == 1 && female) {
          bornDay = days[1];
          akanName = femaleAkanNames[1];
      }
      else if (dayOfTheWeek == 1 && male) {
          bornDay = days[1];
          akanName = maleAkanNames[1];
      }
      else if (dayOfTheWeek == 2 && female) {
          bornDay = days[2];
          akanName = femaleAkanNames[2];
      }
      else if (dayOfTheWeek == 2 && male) {
          bornDay = days[2];
          akanName = maleAkanNames[2];
      }
      else if (dayOfTheWeek == 3 && female) {
          bornDay = days[3];
          akanName = femaleAkanNames[3];
      }
       else if (dayOfTheWeek == 3 && male) {
          bornDay = days[3];
          akanName = maleAkanNames[3];
      }
      else if (dayOfTheWeek == 4 && female) {
          bornDay = days[4];
          akanName = femaleAkanNames[4];
      }
      else if (dayOfTheWeek == 4 && male) {
          bornDay = days[4];
          akanName = maleAkanNames[4];
      }
      else if (dayOfTheWeek == 5 && female) {
          bornDay = days[5];
          akanName = femaleAkanNames[5];
      }
      else if (dayOfTheWeek == 5 && male) {
          bornDay = days[5];
          akanName = maleAkanNames[5];
      }
      else if (dayOfTheWeek == 6 && female) {
          bornDay = days[6];
          akanName = femaleAkanNames[6];
      }
      else if (dayOfTheWeek == 6 && male) {
          bornDay = days[6];
          akanName = maleAkanNames[6];
      }
      let result = document.getElementById("print_day_here").innerHTML = "You Were Born on " + bornDay + ";

      let result = document.getElementById("print_names_here").innerHTML = "your akan name is " + akanName + "!";

};

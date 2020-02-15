function myFunction() {
  let days = ["Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday"];
  let maleAkanNames = ["Kwaku","Yaw","Kofi","Kwame","Kwasi","Kwadwo","Kwabena"];
  let femaleAkanNames = ["Akua","Yaa","Afua","Ama","Akosua","Adwoa","Abenaa"];

  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let dateOfBirth = document.getElementById("date").value

  dateOfBirth = new Date(dateOfBirth);

  let yearOfBirth = dateOfBirth.getFullYear();
  let birthMonth = dateOfBirth.getMonth()+ 1;
  let dayOfBirth = dateOfBirth.getDate () -1;
  let CC = yearOfBirth.toString().substr(0, 2);
  let YY = yearOfBirth.toString().substr(2, 2);
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
      let resultDay = document.getElementById("print_day_here").innerHTML = " your birthday is on " + bornDay + "!"
      let resultName = document.getElementById("print_names_here").innerHTML =  "  your akan name is " + akanName + "!"

};

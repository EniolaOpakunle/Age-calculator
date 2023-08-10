const date = new Date()
    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth() + 1
    let currentDay = date.getDate()
    var birthDay;
    var birthMonth;
    var birthYear;
    var validationMessage = 'This field is required'

    const validate = () => {
      birthDay = day.value;
      birthMonth = month.value;
      birthYear = year.value;
      validateDay = false;
      validateMonth = false;
      validateYear = false;
      evenYear = birthYear % 4
      if(birthDay == ''){
        dayValidation.innerHTML = validationMessage;
      }
      else if(birthDay > 31){
        dayValidation.innerHTML = 'Must be a valid day'
      }
      else{
        validateDay = true;
      }

      if(birthMonth == ''){
        monthValidation.innerHTML = validationMessage;
      }
      else if(birthMonth > 12 || birthMonth < 1){
        monthValidation.innerHTML = 'Must be a valid month'
      }
      else if (birthMonth == 1 || birthMonth == 3 || birthMonth == 5 || birthMonth == 7 || birthMonth == 8 || birthMonth == 10 || birthMonth == 12) {
        if (birthDay > 31) {
          dayValidation.innerHTML = 'Must be a valid day'
        }
        else{
          validateMonth = true;
        }
      }
      else if (birthMonth == 4 || birthMonth == 6 || birthMonth == 9 || birthMonth == 11) {
        if (birthDay > 30) {
          dayValidation.innerHTML = 'Must be a valid day'
        } 
        else{
          validateMonth = true;
        }
      }
      else if(birthMonth == 2 && evenYear == 0 && birthDay > 29){
        dayValidation.innerHTML = 'Must be a valid day'
      }
      else if(birthMonth == 2 && evenYear != 0 && birthDay > 28){
        dayValidation.innerHTML = 'Must be a valid day'
      }
      else{
        validateMonth = true;
      }

      if (birthYear == ''){
        yearValidation.innerHTML = validationMessage;
      }
      else if(birthYear > currentYear){
        yearValidation.innerHTML = 'Must be in the past';
      }
      else if (birthYear == currentYear) {
        if (currentMonth < birthMonth) {
          monthValidation.innerHTML = 'It must be in the past';
        } 
      }
      else{
        validateYear = true;
      }
    }
    const calculate = () => {
      validate()
      if(validateDay == true && validateMonth == true && validateYear == true){
        dayValidation.innerHTML = ''
        monthValidation.innerHTML = ''
        yearValidation.innerHTML = ''
        birthYear = currentYear - birthYear ;
        birthMonth = currentMonth - birthMonth;
        birthDay = currentDay - birthDay

        if (birthDay < 0) {
          birthMonth -= 1;
          birthDay += 30;
        }
        if (birthMonth < 0) {
          birthYear -= 1;
          birthMonth += 12
        }
        years.innerHTML = birthYear;
        months.innerHTML = birthMonth;
        days.innerHTML = birthDay;

      }
    }
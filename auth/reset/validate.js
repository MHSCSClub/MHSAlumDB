 function checkPassword(str)
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }

  function checkForm(form)
  {
    if(form.gyear.value == "") {
      alert("Error: Graduation cannot be blank!");
      form.gyear.focus();
      return false;
    }
    
    if(form.password1.value != "" && form.password2.value == form.password1.value) {
      if(!checkPassword(form.password1.value)) {
        alert("The password you have entered is not valid! You need 8 characters, with at least one capital letter, one lowercase letter, one number, and one special character.");
        form.password1.focus();
        return false;
      }
    } else {
      alert("Error: Please check that your passwords match");
      form.password1.focus();
      return false;
    }
    return true;
  }
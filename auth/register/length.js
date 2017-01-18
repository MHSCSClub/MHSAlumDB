$(".button .button-submit").onclick = function(){myScript};
function checkPassword($("#initial-pass").innerHTML)
  {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return re.test(str);
  }
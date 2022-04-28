/*
 * @Author: nghiemtv.com
 */
$("#login-button").click(function (event) {
    var userName = document.getElementById("userName").value;
    var pwd = document.getElementById("pwd").value;
    if (userName == "TDiepLinh" && pwd == "linhduc") {
      event.preventDefault();
      $("form").fadeOut(500);
      $(".wrapper").addClass("form-success");
      setTimeout(function () {
        location.href = "./html/BirthdayCake.html";
      }, 2000);
    } else {
      alert("Wrong Password");
    }
  });

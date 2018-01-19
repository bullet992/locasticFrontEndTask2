$(document).ready(function(){
  $("#fsubmit").click(function () {
    var name = document.getElementById('contact_name').value;
    var email = document.getElementById('contact_email').value;
    var msg = document.getElementById('contact_message').value;
    var valid = true;

    if ($.fn.validName(name)) {
      if ($.fn.validEmail(email)) {
        if ($.fn.validMessage(msg)) {
          valid = true;
        }
      }
    }
    if (valid) {
      $('form').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
          type: 'post',
          url: 'http://www.locastic.com/api/v1/fe-dev',
          data: $('form').serialize(),
          success: function () {
            alert('Email sent!');
          }
        });
      });
    }
    
  });

  $.fn.validName = function(name){
    var letters = /^[A-Za-z]+$/;

    if (name == "") {
      alert ( "Please type in your full name!" );
      valid = false;
    } 
    else if (name.match(letters)) {
      valid = true;
    }
    else {
      alert('Name must have alphabet characters only!');
      valid = false;
    }
    return valid;
  }

  $.fn.validEmail = function(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "") {
      alert ( "Please provide us your email address!" );
      valid = false;
    } 
    else if (email.match(mailformat)) {
      valid = true;
    }
    else {
      alert("You have entered an invalid email address!");
      valid = false;
    }
    return valid;
  }

  $.fn.validMessage = function(msg) {
    if (msg == "") {
      alert ( "Please type in your message!" );
      valid = false;
    }
    return valid;
  }

});
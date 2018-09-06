$(document).ready(function() {


  $('.svg-hamburger').on('click', function () {
    $('.navbar-content').toggleClass('navbar-content-slide');
  });
})

var ajax = {
    isSubmiting: false,
    send: function() {

      if(ajax.isSubmiting == false) {
        ajax.isSubmiting = true;

        var chatEmailid = $("input[name=chatEmailid]").val();
        var chatPhone = $("input[name=chatPhone]").val();
        var chatMessage = $("textarea[name=chatMessage]").val();

        if(chatEmailid == "" || chatPhone == "" || chatMessage == "")
          alert("Form not complete");
        else {
       ajax.SetText("Sending...");
          $.post("../chat/chat.php", {
            chatEmailid: chatEmailid, chatPhone: chatPhone, chatMessage: chatMessage
          }, function(data) {
            if(data == "true") {
              ajax.SetText("Sent!");
            } else {
              ajax.SetText("Send mail");
              alert(data);
            }

            ajax.isSubmiting = false;
          });
        }
      }
      else alert("You can only send 1 email at a time");
    },
    SetText: function(text) {
      $("input[type=button]").val(text);
    }
  }

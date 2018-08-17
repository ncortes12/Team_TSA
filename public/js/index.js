var randomNumber = 0;
var message;

$("#compButt").on("click", function() {
  randomNumber = Math.floor(Math.random() * 200) + 1;
  console.log("working");
  console.log(randomNumber);
  $.ajax("/api/complements/" + randomNumber, {
    type: "GET"
  }).then(function(data) {
    console.log("doing things");
    // console.log(data);
    message = data;
    $("#genComp").text(data);
  });
  $("#compSendButt").on("click", function() {
    console.log("hello" + message);
    $("#messageBody").text(message);
  });
});

$("#sendMessage").on("click", function(event) {
  event.preventDefault();
  var phone = $("#phonenumber")
    .val()
    .trim();
  var newText = {
    number: phone,
    message: message
  };
  $.ajax("/api/complements", {
    type: "POST",
    data: newText
  }).then(function() {
    alert("You sent a message!");
  });
});
var messageId;
var UserId;

$("#compSaveButt").on("click", function(event) {
  event.preventDefault();
  messageId = randomNumber
  userId = window.location.pathname;
  
  console.log("number here" + messageId);
  console.log(userId);
});

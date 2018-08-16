var randomNumber = 0;
var message;

$("#compButt").on("click", function() {
  randomNumber = Math.floor(Math.random() * 200) + 1;
  console.log("working");
  console.log(randomNumber);
  $.ajax("api/complements/" + randomNumber, {
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
  $.ajax("api/complements", {
    type: "POST",
    data: newText
  }).then(function() {
    alert("You sent a message!");
  });
});



//Complements above, insults below


var getInsult;
//var message;


$("#insulButt").on("click", function() {
  getInsult()
  console.log("working insult");
  $.ajax("api/insultapi/" {
    type: "GET"
  }).then(function(getInsult) {
    console.log("doing insult things");
    message = data;
    $("#genComp").text(data);
  });
  $("#compSendButt").on("click", function() {
    console.log("hello" + getInsult);
    $("#messageBody").text(getInsult);
  });
});

$("#sendMessage").on("click", function(event) {
  event.preventDefault();
  var phone = $("#phonenumber").val().trim();
  var newText = {
    number: phone,
    message: message
  };
  $.ajax("api/complements", {
    type: "POST",
    data: newText
  }).then(function() {
    alert("You sent a message!");
  });

$("#logButt").on("click", function(event) {
  event.preventDefault();
  $("#loginModal").modal("show");
});

$(".contButt").on("submit", function(event) {
  event.preventDefault();
  location.href = "http://localhost:3000/welcome";

});
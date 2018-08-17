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

$("#insulButt").on("click", function(event) {
  event.preventDefault();
  randomNumber = Math.floor(Math.random() * 75) + 1;
  console.log("working");
  console.log(randomNumber);
  $.ajax("/api/insults/" + randomNumber, {
    type: "GET"
  }).then(function(data) {
    console.log("doing things");
    // console.log(data);
    message = data;
    $("#genInsult").text(data);
  });
  $("#insultSendButt").on("click", function() {
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
// var messageId;
// var UserId;
// var UserIdNum;


// $("#compSaveButt").on("click", function(event) {
//   event.preventDefault();
//   messageId = randomNumber;
//   UserId = window.location.pathname.slice(9);
//   UserIdNum = parseInt(UserId);

//   console.log("number here" + messageId);
//   console.log(UserIdNum);
//   var newSaved = {
//     MessageId: messageId,
//     UserId: UserIdNum
//   };
// $.ajax("/api/saved",{
//   type: "POST",
//   data: newSaved
// }).then(function(){
//   console.log("thing and such")
// })
// });




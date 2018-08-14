var randomNumber = 0;

$("#compButt").on("click", function() {
  randomNumber = Math.floor(Math.random() * 200) + 1;
  console.log("working");
  console.log(randomNumber);
  $.ajax("api/complements/", {
    type: "POST",
    data: { id: randomNumber }
  }).then(function() {
    console.log("doing things");
  });
});

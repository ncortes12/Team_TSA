var getInsult = require("../api/insultapi.js");
var keys = require("../keys.js");

getInsult(function (data) {

    console.log("this is our data on our test page: " + data);

})
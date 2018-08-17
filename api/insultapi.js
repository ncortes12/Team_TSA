

var unirest = require("unirest")
module.exports = function (cb) {
  // These code snippets use an open-source library. http://unirest.io/nodejs
  unirest.get("https://lakerolmaker-insult-generator-v1.p.mashape.com/?mode=random")
    .header("X-Mashape-Key", "NVvEfWYNPymshK5c9sCsJ5Rb7W61p1cIWpGjsnVulTyKqFzI5u")
    //.header("Accept", "text/plain")
    .end(function (response) {
      //console.log(response.status, response.headers, response.body);
      console.log(response);

      var x = response.body;
      console.log(x)
      cb(x)

    });



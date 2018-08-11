var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/complements/", function(req, res) {
    console.log("look this route is working! You're the best!");
    console.log(req.body.id);
    db.complement
      .findAll({
        where: { id: req.body.id }
      })
      .then(function(complementBody) {
        console.log(complementBody);
      });
  });
};

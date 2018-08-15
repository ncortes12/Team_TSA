var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/complements/:id", function(req, res) {
    console.log("look this route is working! You're the best!");
    var id = req.params.id;
    console.log(id);
    db.Complement.findAll({
      where: { id: id }
    }).then(function(complementBody) {
      console.log(complementBody[0].MessageBody);
      var hbsObject = { complement: complementBody[0].MessageBody };
      console.log(hbsObject);
      res.render("content", hbsObject);
    });
  });
};

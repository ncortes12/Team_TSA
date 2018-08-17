var db = require("../models");
var keys = require("../keys.js");
var twilio = keys.twilio;
const accountSid = twilio.accountSid ;
const authToken = twilio.authToken;
const client = require('twilio')(accountSid, authToken);

console.log(accountSid, authToken);


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
      res.json(complementBody[0].MessageBody);
    });
  });

  app.post("/api/complements" , function(req,res){
    console.log(req.body);
    client.messages
  .create({
     body: req.body.message,
     from: '+15207048056',
     to: "+1" +req.body.number
   })
  .then(message => console.log(message.sid))
  .done();
    
  })

app.post("/api/users", function (req,res){
  // console.log(req.body);
  db.User.findAll({where:{Username:req.body.Username}}).then(function(data){
    // console.log(data)
    if(data.length<1){
      db.User.create({Username:req.body.Username,
      Password:req.body.Password}).then(function(data){
        console.log(data)
        res.json(data);
      })
    }
    else{res.json(data);
    console.log(data[0].id)
  }
  })
  
})


  
  



};
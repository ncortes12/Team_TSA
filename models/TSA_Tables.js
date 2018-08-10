module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    Username: DataTypes.STRING,
    Password: DataTypes.TEXT
  });
  return User;

  var Message = sequelize.define("Messages", {
    Message_Body: DataTypes.STRING,
    Insult: DataTypes.Boolean,
    Saved: DataTypes.Boolean
  });
  return Message
};

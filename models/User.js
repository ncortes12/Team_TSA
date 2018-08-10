module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    Username: DataTypes.STRING,
    Password: DataTypes.TEXT
  });
  return User;
};

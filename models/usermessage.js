module.exports = function(sequelize, DataTypes) {
    var usermessage = sequelize.define("usermessage", {
      MessageID: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER
    });
    return usermessage;
  };
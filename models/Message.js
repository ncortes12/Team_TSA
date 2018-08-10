module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Messages", {
    MessageBody: DataTypes.STRING,
    Insult: DataTypes.BOOLEAN,
    Saved: DataTypes.BOOLEAN
  });
  return Message;
};

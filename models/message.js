module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    MessageBody: DataTypes.STRING,
    Insult: DataTypes.BOOLEAN
  });
  Message.associate = function(models) {
    Message.belongsToMany(models.User, {
      through: "UserMessages",
      foreignKey: "MessageId"
    });
  };
  return Message;
};

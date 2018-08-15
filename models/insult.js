module.exports = function(sequelize, DataTypes) {
  var Insult = sequelize.define("Insult", {
    MessageBody: DataTypes.STRING,
    Saved: DataTypes.BOOLEAN
  });
  return Insult;
};

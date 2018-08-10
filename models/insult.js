module.exports = function(sequelize, DataTypes) {
  var insult = sequelize.define("insults", {
    MessageBody: DataTypes.STRING,
    Saved: DataTypes.BOOLEAN
  });
  return insult;
};

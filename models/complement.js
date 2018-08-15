module.exports = function(sequelize, DataTypes) {
  var Complement = sequelize.define("Complement", {
    MessageBody: DataTypes.STRING,
    Saved: DataTypes.BOOLEAN
  });
  return Complement;
};

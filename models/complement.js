module.exports = function(sequelize, DataTypes) {
    var complement = sequelize.define("complements", {
      MessageBody: DataTypes.STRING,
      Saved: DataTypes.BOOLEAN
    });
    return complement;
  };

  //hello   x
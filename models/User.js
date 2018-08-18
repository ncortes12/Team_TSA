module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    Username: DataTypes.STRING,
    Password: DataTypes.TEXT
  });
  User.associate = function(models) {
    User.belongsToMany(models.Message, {
      through: "UserMessages",
      foreignKey: "UserId"
   });
  };
  return User;
};

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property_Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property_Owner.hasMany(models.Property, {
        foreignKey: "P_OwnerId",
      });
    }
  }
  Property_Owner.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      lastName: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        AllowNull: false,
      },
      profileImage: {
        type: DataTypes.BLOB("long"),
        AllowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Property_Owner",
    }
  );
  return Property_Owner;
};

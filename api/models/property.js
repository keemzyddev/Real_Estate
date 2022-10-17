const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Property.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      propertyName: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      type: {
        type: DataTypes.ENUM("Residential", "Commercial", "Office", "Shop"),
        AllowNull: false,
      },
      numberOfUnits: {
        type: DataTypes.INTEGER,
        AllowNull: false,
      },
      propertyImage: {
        type: DataTypes.BLOB("long"),
        AllowNull: true,
      },
      owner: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};

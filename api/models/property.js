const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Property.belongsTo(models.Property_Owner, {
        foreignKey: "P_OwnerId",
        onDelete: "CASCADE"
      });
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
      state: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      lga: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      town: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        AllowNull: false,
      },
      P_OwnerId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        onDelete: "CASCADE",
        references: {
          model: "Property_Owners",
          key: "id",
        },
    },
  },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};

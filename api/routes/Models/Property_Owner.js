import { sequelize, DataTypes } from "sequelize";

// export default (sequelize, DataTypes) => {
const Property_Owner = sequelize.define("property_owner", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  property_Name: {
    type: DataTypes.STRING,
    AllowNull: false
  },
  type: {
    type: DataTypes.STRING,
    AllowNull: false
  },
  number_Of_Units: {
    type: DataTypes.STRING,
    AllowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    AllowNull: false
  },
  owner: {
    type: DataTypes.NUMBER,
    AllowNull: false
  },
  country: {
    type: DataTypes.STRING,
    AllowNull: false
  },
  street: {
    type: DataTypes.NUMBER,
    AllowNull: false
  },
});
// }

export default Property_Owner;

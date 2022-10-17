import { sequelize, DataTypes } from "sequelize";

// export default (sequelize, DataTypes) => {
const Property = sequelize.define("property_owner", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  lastName: {
    type: DataTypes.STRING,
    AllowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    AllowNull: false
  },
  email: {
    type: DataTypes.STRING,
    AllowNull: false
  },
  Phone: {
    type: DataTypes.NUMBER,
    AllowNull: false
  },
  Dob: {
    type: DataTypes.NUMBER,
    AllowNull: false
  },
  drivers_License_Number: {
    type: DataTypes.STRING,
    AllowNull: false
  },
  monthly_Gross_Pay: {
    type: DataTypes.NUMBER,
    AllowNull: false
  },
  annual_Income: {
    type: DataTypes.NUMBER,
    AllowNull: false
  },
  additional_Income: {
    type: DataTypes.NUMBER,
    AllowNull: false
  },
  asset: {
    type: DataTypes.NUMBER,
    AllowNull: false
  },
  status: {
    type: DataTypes.NUMBER,
    AllowNull: false
  },
});
// }

Property.sync({ force: true });

export default Property;

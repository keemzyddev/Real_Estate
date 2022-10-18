const { property_Owner } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Properties", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      propertyName: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      type: {
        type: Sequelize.ENUM("Residential", "Commercial", "Office", "Shop"),
        AllowNull: false,
      },
      numberOfUnits: {
        type: Sequelize.INTEGER,
        AllowNull: false,
      },
      propertyImage: {
        type: Sequelize.BLOB("long"),
        AllowNull: true,
      },
      owner: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      lga: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      town: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      P_OwnerId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        onDelete: "CASCADE",
        references: {
          model: "Property_Owners",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Properties");
  },
};

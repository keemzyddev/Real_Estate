/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Property_Owners", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      lastName: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      dob: {
        type: Sequelize.DATE,
        AllowNull: false,
      },
      profileImage: {
        type: Sequelize.Sequelize.BLOB("long"),
        AllowNull: false,
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
    await queryInterface.dropTable("Property_Owners");
  },
};

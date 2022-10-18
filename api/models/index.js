const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const dotenv = require("dotenv").config();

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// sequelize = new Sequelize(process.env.DATABASE_URL);
sequelize = new Sequelize("real_estate", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

//test db
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully..."))
  .catch((err) => console.log("Unable to connect to the database:", err));

const db = {
  property_Owner: require("./property_owner"),
  property: require("./property"),
};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

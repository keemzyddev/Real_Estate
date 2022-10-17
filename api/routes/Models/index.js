import Sequelize from "sequelize";
// import pkg from 'pg';
// const { Client } = pkg;
// import dotenv from "dotenv";
// dotenv.config();

// const client = new Client({
//   user: "postgres",
//   password: "12345",
//   host: "localhost",
//   database: "real_estate",
// });

// client.connect()
// .then(()=> console.log('Database created successfully...'))
// .catch((err)=>console.log('Unable to create database:', err))

// client.query('CREATE DATABASE "real_estate"', (err, res) => {
//   console.log(err, res);
//   client.end();
// });

const sequelize = new Sequelize("real_estate", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

//test db
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully..."))
  .catch((err) => console.log("Unable to connect to the database:", err));

// const db = {
//   Property_Owner: sequelize.import("./property_Owner"),
//   Property: sequelize.import("./property"),
// };

// Object.keys(db).forEach((modelName) => {
//   if ("associate" in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;

export default sequelize;

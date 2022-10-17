const express = require ("express");
const dotenv = require ("dotenv");
dotenv.config();
const property_Owner_Routes = require ("./routes/property_Owner.js");
const db = require ("./Models/index.js");
// import sequelize from "./routes/Models/index.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/user", property_Owner_Routes);

app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});

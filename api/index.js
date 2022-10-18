const express = require ("express");
const dotenv = require ("dotenv");
dotenv.config();
const property_Owner_Routes = require ("./routes/property_Owner.js");
const property_Routes = require ("./routes/property.js");
const db = require ("./Models/index.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

//routes
app.use("/api", property_Owner_Routes);
app.use("/api", property_Routes);

app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});

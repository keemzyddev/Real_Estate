const express = require("express");
const upload = require("../config/fileUpload");
const auth = require("../config/authMiddleware");

const {
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/property");

const router = express.Router();

router.get("/property", getProperty);
router.post("/create-property", auth, upload.single("propertyImage"), addProperty);
router.put("/property/:id", auth, upload.single("propertyImage"), updateProperty);
router.delete("/property/:id", auth, deleteProperty);

module.exports = router;

const express = require ("express");

const { fileUpload } = require ("../controllers/property_Owner");
const router = express.Router();

router.post("/", fileUpload);

module.exports = router;
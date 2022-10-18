const express = require("express");
const upload = require("../config/fileUpload");

const { getUser, addUser, loginUser, updateUser, deleteUser } = require("../controllers/property_Owner");
const router = express.Router();

router.get("/user", getUser);
router.post("/register", upload.single("profileImage"), addUser);
router.post("/login", loginUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;

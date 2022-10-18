const multer = require ("multer");
// import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const mimeExtension = {
      "image/jpeg": ".jpeg",
      "image/jpg": ".jpg",
      "image/png": ".png",
      "image/gif": ".gif",
    };
    cb(null, file.fieldname + Date.now() + mimeExtension[file.mimetype]);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      req.fileError = "File Format is not valid";
    }
  },
});

module.exports = upload

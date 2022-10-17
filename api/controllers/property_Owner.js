const upload = require ("../config/fileUpload");

const fileUpload = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.file);
      res.json("file Uploaded");
    }
  });
};

module.exports = {
  fileUpload,
}
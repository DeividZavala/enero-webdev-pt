const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDSECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "ironbnb",
  allowedFormats: ["jpg", "png", "jpeg"],
  filename(req, file, cb) {
    cb(null, file.originalname);
  }
});

module.exports = multer({ storage });

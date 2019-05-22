const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUD,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "todos", // The name of the folder in cloudinary
  allowedFormats: ["jpg", "jpeg", "png"],
  filename: function(req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  },
});

module.exports = multer({ storage });

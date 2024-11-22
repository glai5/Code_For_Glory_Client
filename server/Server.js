const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for React frontend
app.use(cors());

// Configure Multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Save files in the "uploads" folder
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname); // Add timestamp to filename
    },
  }),
});

// Ensure "uploads" folder exists
const fs = require("fs");
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Function to count the files in the uploads folder
function countFilesInUploads() {
  return fs.readdirSync("uploads").filter(function (file) {
    return fs.lstatSync(path.join("uploads", file)).isFile();
  }).length;
}

// File upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.json({ filename: req.file.filename }); // Respond with the saved file name
});

// Count the files after upload
let fileCount = countFilesInUploads();
console.log("Number of files in uploads:", fileCount);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
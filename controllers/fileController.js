const FileModel = require('../models/fileModel');

const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  
  // Save the file details to a database or perform other actions as needed

  res.redirect('/success');
};

const uploadSuccess = (req, res) => {
  res.render('uploadSuccess');
};

module.exports = { uploadFile, uploadSuccess };

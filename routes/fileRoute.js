const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/fileController');

const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res) => res.render('uploadForm'));
router.post('/upload', upload.single('file'), uploadController.uploadFile);
router.get('/success', uploadController.uploadSuccess);

module.exports = router;

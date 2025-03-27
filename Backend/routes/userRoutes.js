const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  getMe, 
  updateUser 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });


router.post('/register', upload.single('profileImage'), registerUser);
router.post('/login', loginUser);


router.get('/me', protect, getMe);
router.put('/update', protect, upload.single('profileImage'), updateUser);

module.exports = router;
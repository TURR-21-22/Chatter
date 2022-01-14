const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const router = express.Router();
const appCtrl = require('../controllers/appController');

router.get('/', appCtrl.index);
router.get('/chat', appCtrl.chat);
router.post('/auth', appCtrl.auth);

router.get('/register', appCtrl.register);
router.post('/register', appCtrl.registerNewUser);

module.exports = router;
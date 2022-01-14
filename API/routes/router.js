const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const router = express.Router();
const appCtrl = require('../controllers/appController');

router.get('/', appCtrl.index);
router.post('/chat', appCtrl.chat);

module.exports = router;
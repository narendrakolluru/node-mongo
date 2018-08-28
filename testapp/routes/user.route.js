const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');


router.post('/create', user_controller.user_create);
router.get('/all_users', user_controller.all_users);

module.exports = router;

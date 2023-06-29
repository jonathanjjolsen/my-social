const router = require('express').Router();

const {
    getUsers,
} = require('../../controllers/userController')

//Get route for all users
router.route('/').get(getUsers);

module.exports = router;
const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
} = require('../../controllers/userController')

//Get route for all users
router.route('/').get(getUsers);

//Route for single user functionality
router
    .route('/:userId')
    .get(getSingleUser);

module.exports = router;
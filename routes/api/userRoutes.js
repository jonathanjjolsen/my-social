const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../controllers/userController')

//Get route for all users
router.route('/').get(getUsers).post(createUser);

//Route for single user functionality
router
    .route('/:userId')
    .get(getSingleUser);

module.exports = router;
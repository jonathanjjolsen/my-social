const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController')

//Get and Create Routes for all users
router
    .route('/')
    .get(getUsers)
    .post(createUser);

//Route for single user functionality
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

    // Route for Adding and Removing Friends
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)
    
module.exports = router;
const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
} = require('../../controllers/thoughtsController')

//Get and Create Routes for thoughts
router
    .route('/')
    .get(getThoughts)
    .post(addThought)

//Routes for single thought functionality
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

// Route for adding and removing thoughts
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

module.exports = router;
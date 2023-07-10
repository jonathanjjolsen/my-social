const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    addThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtsController')

router.route('/').get(getThoughts).post(addThought)

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;
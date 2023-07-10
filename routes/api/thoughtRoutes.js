const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    addThought,
    updateThought,
} = require('../../controllers/thoughtsController')

router.route('/').get(getThoughts).post(addThought)

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)

module.exports = router;
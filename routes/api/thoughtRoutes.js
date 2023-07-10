const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    addThought,
} = require('../../controllers/thoughtsController')

router.route('/').get(getThoughts).post(addThought)

router.route('/:thoughtId')
    .get(getSingleThought)

module.exports = router;
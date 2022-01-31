const router = require('express').Router();

const {
    addChildcard,
    getAllChildcards,
    getChildcardById,
    updateChildcard,
    deleteChildcard,
} = require('../../controllers/childcard-controller');

// set up GET all and POST at /api/Card
router
    .route('/')
    .get(getAllChildcards)
    .post(addChildcard)

// set up GET, PUT, and DELETE at /api/Card/:id
router
    .route('/:id')
    .get(getChildcardById)
    .put(updateChildcard)
    .delete(deleteChildcard)

module.exports = router;
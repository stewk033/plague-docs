const router = require('express').Router();

const {
    addChildvaxcard,
    getAllChildvaxcards,
    getChildvaxcardById,
    updateChildvaxcard,
    deleteChildvaxcard,
} = require('../../controllers/Childvaxcard-controller');

// set up GET all and POST at /api/Card
router
    .route('/')
    .get(getAllChildvaxcards)
    .post(addChildvaxcard)

// set up GET, PUT, and DELETE at /api/Card/:id
router
    .route('/:id')
    .get(getChildvaxcardById)
    .put(updateChildvaxcard)
    .delete(deleteChildvaxcard)

module.exports = router;
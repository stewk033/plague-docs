const router = require('express').Router();

const {
    addChildvaxcard,
    getAllChildvaxcards,
    getChildvaxcardById,
    updateChildvaxcard,
    deleteChildvaxcard,
} = require('../../controllers/Childvaxcard-controller');

// set up GET all and POST at /api/childvaxcard
router
    .route('/')
    .post(addChildvaxcard)
    .get(getAllChildvaxcards);

// set up GET one, PUT, and DELETE at /api/childvaxcard/:id
router
    .route('/:id')
    .get(getChildvaxcardById)
    .put(updateChildvaxcard)
    .delete(deleteChildvaxcard);

module.exports = router;
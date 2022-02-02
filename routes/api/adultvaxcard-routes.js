const router = require('express').Router();

const {
    addAdultvaxcard,
    getAllAdultvaxcards,
    getAdultvaxcardById,
    updateAdultvaxcard,
    deleteAdultvaxcard
} = require('../../controllers/Adultvaxcard-controller');

// set up GET all and POST at /api/Card
router
    .route('/')
    .get(getAllAdultvaxcards)
    .post(addAdultvaxcard);

// set up GET, PUT, and DELETE at /api/Card/:id
router
    .route('/:id')
    .get(getAdultvaxcardById)
    .put(updateAdultvaxcard)
    .delete(deleteAdultvaxcard);

module.exports = router;
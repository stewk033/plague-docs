const router = require('express').Router();

const {
    addAdultcard,
    getAllAdultcards,
    getAdultcardById,
    updateAdultcard,
    deleteAdultcard
} = require('../../controllers/adultcard-controller');

// set up GET all and POST at /api/Card
router
    .route('/')
    .get(getAllAdultcards)
    .post(addAdultcard);

// set up GET, PUT, and DELETE at /api/Card/:id
router
    .route('/:id')
    .get(getAdultcardById)
    .put(updateAdultcard)
    .delete(deleteAdultcard);

module.exports = router;
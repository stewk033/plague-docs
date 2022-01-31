const router = require('express').Router();

const {
    addChildCard,
    addAdultCard,
    getAllCards,
    getCardById,
    updateCard,
    deleteChildCard,
    deleteAdultCard
} = require('../../controllers/Card-controller');

// set up GET all and POST at /api/Card
router
    .route('/')
    .get(getAllCards)
    .post(addChildCard)
    .post(addAdultCard);

// set up GET, PUT, and DELETE at /api/Card/:id
router
    .route('/:id')
    .get(getCardById)
    .put(updateCard)
    .delete(deleteChildCard)
    .delete(deleteAdultCard);

module.exports = router;
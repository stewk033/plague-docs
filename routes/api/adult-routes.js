const router = require('express').Router();

const {
    addAdult,
    getAllAdults,
    getAdultById,
    updateAdult,
    deleteAdult
} = require('../../controllers/adult-controller');

// set up GET all and POST at /api/adult
router
    .route('/')
    .get(getAllAdults)
    .post(addAdult);

// set up GET, PUT, and DELETE at /api/adult/:id
router
    .route('/:id')
    .get(getAdultById)
    .put(updateAdult)
    .delete(deleteAdult);

module.exports = router;
const router = require('express').Router();

const {
    getFamilyById
} = require('../../controllers/household-controller');

// /api/family
router
    .route('/:id')
    .get(getFamilyById);

module.exports = router;
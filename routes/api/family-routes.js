const router = require('express').Router();

const {
    getFamilyById
} = require('../../controllers/family-controller');

// /api/family
router
    .route('/:id')
    .get(getFamilyById);

module.exports = router;
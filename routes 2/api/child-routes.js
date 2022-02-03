const router = require('express').Router();

const {
    addChild,
    getAllChildren,
    getChildById,
    updateChild,
    deleteChild
} = require('../../controllers/Child-controller');

// set up GET all and POST at /api/Child
router
    .route('/')
    .get(getAllChildren)
    .post(addChild);

// set up GET, PUT, and DELETE at /api/Child/:id
router
    .route('/:id')
    .get(getChildById)
    .put(updateChild)
    .delete(deleteChild);

module.exports = router;
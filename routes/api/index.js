const router = require('express').Router();

const childcardRoutes = require('./childcard-routes');
const adultcardRoutes = require('./adultcard-routes');

const childRoutes = require('./child-routes');
const adultRoutes = require('./adult-routes');

// const familyRoutes = require('./family-routes');

router.use('/childcard', childcardRoutes);
router.use('/adultcard', adultcardRoutes);
router.use('/child', childRoutes);
router.use('/adult', adultRoutes);

// router.use('/family', familyRoutes);

module.exports = router;
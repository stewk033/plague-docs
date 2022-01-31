const router = require('express').Router();

const cardRoutes = require('./card-routes');
const childRoutes = require('./child-routes');
const adultRoutes = require('./adult-routes');

// const familyRoutes = require('./family-routes');

router.use('/card', cardRoutes);
router.use('/child', childRoutes);
router.use('/adult', adultRoutes);
// router.use('/family', familyRoutes);

module.exports = router;
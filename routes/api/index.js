const router = require('express').Router();
const adultRoutes = require('./adult-routes');
// const childRoutes = require('./child-routes');
// const familyRoutes = require('./family-routes');

router.use('/adult', adultRoutes);
// router.use('/child', childRoutes);
// router.use('/family', familyRoutes);

module.exports = router;
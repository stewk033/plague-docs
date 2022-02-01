const router = require('express').Router();

const childRoutes = require('./child-routes');
const adultRoutes = require('./adult-routes');

const childvaxcardRoutes = require('./childvaxcard-routes');
const adultvaxcardRoutes = require('./adultvaxCard-routes');
// const householdRoutes = require('./household-routes');

router.use('/child', childRoutes);
router.use('/adult', adultRoutes);

router.use('/childvaxcard', childvaxcardRoutes);
router.use('/adultvaxcard', adultvaxcardRoutes);
// router.use('/household', householdRoutes);

module.exports = router;
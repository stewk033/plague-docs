const router = require('express').Router();
const authRoutes = require('./auth-routes');

const childRoutes = require('./child-routes');
const adultRoutes = require('./adult-routes');

const childvaxcardRoutes = require('./childvaxcard-routes');
const adultvaxcardRoutes = require('./adultvaxCard-routes');

router.use('/auth', authRoutes);
router.use('/child', childRoutes);
router.use('/adult', adultRoutes);

router.use('/childvaxcard', childvaxcardRoutes);
router.use('/adultvaxcard', adultvaxcardRoutes);

module.exports = router;
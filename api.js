const router = require("express").Router();
const dateController = require('./dateController');

router.get('/', dateController.getCurrDate)

router.get('/:date', dateController.getDateByFormat);

module.exports = router
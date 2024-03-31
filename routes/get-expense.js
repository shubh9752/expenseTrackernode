const getExpense = require('../controllers/getExpense');
const router = require('express').Router();


router.get('/get-expense', getExpense);

module.exports = router;
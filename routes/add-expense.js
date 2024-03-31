const addExpense = require('../controllers/addExpense');
const router = require('express').Router();


router.post('/add-expense', addExpense);

module.exports = router;
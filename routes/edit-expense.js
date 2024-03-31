const editExpense = require('../controllers/editExpense');
const router = require('express').Router();


router.put('/edit-expense/:expenseId', editExpense);

module.exports = router;
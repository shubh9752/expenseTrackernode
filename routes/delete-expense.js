const deleteExpense = require('../controllers/deleteExpense');
const router = require('express').Router();


router.delete('/delete-expense/:expenseId', deleteExpense);

module.exports = router;
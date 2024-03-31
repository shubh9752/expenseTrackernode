const Expense = require('../models/ExpenseSchema');

const deleteExpense = async (req, res) => {
    const expenseId = req.params.expenseId;

    try {
        const expense = await Expense.findByPk(expenseId);//find by pk heslp you to find single item using primarykey
        const result = await expense.destroy();
        res.send(result);   
    } catch (error) {
        console.log(error);
    }
}

module.exports = deleteExpense;
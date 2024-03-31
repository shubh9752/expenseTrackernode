const express = require('express');



//import required to parse JSON data as a POST request
const bodyParser = require('body-parser');

//imports required for DB connection and table creation
const sequelize = require('./util/dbconfig');
const Expense = require('./models/ExpenseSchema'); //Without this table was not getting created

//imports requires for different routes
const createExpenseRoute = require('./routes/add-expense');
const getExpenseRoute = require('./routes/get-expense');
const deleteExpenseRoute = require('./routes/delete-expense');
const editExpenseRoute = require('./routes/edit-expense');

const app = express();

app.use(bodyParser.json());

//import required to allow CORS origin connection
const cors = require("cors");
app.use(cors());

app.use('/', createExpenseRoute);
app.use('/', getExpenseRoute);
app.use('/', deleteExpenseRoute);
app.use('/', editExpenseRoute);

const PORT = 8080;
sequelize.sync({force: true})
    .then(result => {
        app.listen(PORT, () => {
            console.log("Listening on PORT:", PORT);
        });
    })
    .catch(err => console.log(err));
const express = require('express');
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const fruitRouter = require("./routes/fruits");

const app = express();



app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);


const mongoDB = "mongodb://127.0.01/database";
mongoose.connect(mongDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("connected", () => console.log('Mongoose connection open to ${mongoDB}'));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;
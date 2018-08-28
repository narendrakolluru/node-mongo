const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const user = require('./routes/user.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'localhost:27017';
let dev_db_url = 'mongodb://localhost:27017/mongoDB';
const mongoDB = process.env.MONGODB_URI ||  dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/users', user);

let port = 4202;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const routes = require('./routes/routes');

const port = 3000 || process.env.PORT;

const app = express();
app.set('port', port);
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

const server = http.createServer(app);
server.listen(port);
console.log('Server listening at http://localhost:3000');

const Category = require('./models/Category');
const Product = require('./models/Product');
Category.hasMany(Product);


sequelize.sync({
    // force: true
});
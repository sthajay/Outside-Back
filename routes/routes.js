const express = require('express');
const CategoryController = require('./../controllers/CategoryController');
const ProductController = require('../controllers/ProductController');
const UserController = require('./../controllers/UserController');
const SalesController = require('./../controllers/SalesController');
const checkAuth = require('./../middleware/check-auth');
const Router = express.Router();

Router.post('/api/user/signup',UserController.signUp);
Router.post('/api/user/login',UserController.login);

Router.post('/api/categories',checkAuth, CategoryController.store);
Router.get('/api/categories',checkAuth, CategoryController.index);

Router.get('/api/products',checkAuth, ProductController.all);
Router.post('/api/products',checkAuth, ProductController.store);
Router.get('/api/products/product/:productName',checkAuth, ProductController.getPriceByProduct);
Router.get('/api/products/:id',checkAuth, ProductController.getProductByCatId);

Router.post('/api/sales',SalesController.store);


module.exports = Router;
const express = require('express');

const CompanyController = require('./app/controller/CompanyController');
const ProductController = require('./app/controller/ProductController');
const ProfileController = require('./app/controller/ProfileController');
const SessionController = require('./app/controller/SessionController');


const routes = express.Router();

//create session
routes.post('/sessions',SessionController.create);

//Company routes
routes.post('/company',CompanyController.create);
routes.get('/company/:company_id',CompanyController.show);
routes.get('/companies',CompanyController.index);
routes.put('/company/:company_id',CompanyController.update);
routes.delete('/company/:company_id',CompanyController.delete);

//profile 
routes.get('/profile',ProfileController.index);

//Products
routes.post('/product',ProductController.create);
routes.get('/products',ProductController.index);
routes.delete('/product/:id',ProductController.delete);


module.exports = routes; 


const Customer =require('../models/Customer');
const mongoose = require('mongoose');

/**
 * GET /
 * Homepage
 */

exports.homepage =async(req,res)=>{
    
     const locals ={
            title: 'NodeJs',
            description:' Free NodeJs Management System',
        }
        res.render('index',locals);


}

/**
 * GET /
 * new customer 
 */

exports.addCustomer =async(req,res)=>{
    
     const locals ={
            title: 'Add new user',
            description:' Free NodeJs Management System',
        }
        res.render('customer/add',locals);
}


/**
 * POST /
 * Create New customer 
 */

exports.postCustomer =async(req,res)=>{

    console.log(req.body);

    const newCustomer=new Customer({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        details: req.body.details,
        tel: req.body.tel,
        email: req.body.email,
    });

    try{
        await Customer.create(newCustomer);
        res.redirect('/');

        res.render('customer/add',locals);
    

    } catch (error) {
        console.log(error);

    }
 

    
   
}
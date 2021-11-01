const express = require('express');

const Product = require('../model/products');

const router = express.Router();

// Create a product
router.post('/product-phone', async (req, res) => {

    const {model, brand, price, color} = req.body;

    try {

        if (await model.length < 2 ||  model.length > 255) {
            return res.status(400).send({
                error:
                    'make sure the | model | field meets the requirements of a minimum of 2 and a maximum of 255 ' +
                    'characters'})
        }

        if (await brand.length < 2 ||  brand.length > 255) {
            return res.status(400).send({
                error:
                    'make sure the | brand | field meets the requirements of a minimum of 2 and a maximum of 255 ' +
                    'characters'})
        }

        if(await price < 0){
            return res.status(400).send({error: 'Enter a positive number for the price field.'})
        }

        const product = await Product.create(req.body);

        return res.send({ product })

    } catch (err) {
        console.log(err)
        res.status(400).send({error: 'Registration failed, ' + err})
    }
});

//  List all products
router.get('/products-phones', async(req, res) => {

    try{
        const phones = await Product.find()

        return res.send({ phones })
    }
    catch (err){
        return res.status(400).send({ error: 'Failed to list products, try again'})
    }

});

// Show a specific phone
router.get('/product-phone/:phoneId', async (req, res) => {

    try{
        const phone = await Product.findById(req.params.phoneId)

        return res.status(200).send({ phone })
    }
    catch (err){

        if(err.kind === 'ObjectId'){
            return res.status(404).send({error: 'Failed to fetch product, try again'})
        }

        return res.status(500).send({error: 'Failed to show product, try again'})
    }

})

// Update phone record
router.put('/product-phone/:phoneId', async (req, res) => {

    try{
        const { model, price, brand, startDate, endDate, color } = req.body

        if (!req.body) {
            return res.status(400).send({ error: 'Phone product fields cannot be empty' });
        }

        if (await model.length < 2 ||  model.length > 255) {
            return res.status(400).send({
                error:
                    'make sure the | model | field meets the requirements of a minimum of 2 and a maximum of 255 ' +
                    'characters'})
        }

        if (await brand.length < 2 ||  brand.length > 255) {
            return res.status(400).send({
                error:
                    'make sure the | brand | field meets the requirements of a minimum of 2 and a maximum of 255 ' +
                    'characters'})
        }

        if(await price < 0){
            return res.status(400).send({error: 'Enter a positive number for the price field.'})
        }

        const phone = await Product.findByIdAndUpdate(req.params.phoneId, {
            model,
            price,
            brand,
            startDate,
            endDate,
            color
        }, {new: true});

        await phone.save()

        return res.status(200).send({message: 'product registration successfully updated'})

    }
    catch (err){
        if (err.kind === 'ObjectId' ){
            return res.status(404).send({ error: "product not found with id " + req.params.phoneId });
        }

        return res.status(500).send({ error: "failed to update product with id " + req.params.phoneId +" "+ err });
    }

})

// Delete phone
router.delete('/product-phone/:phoneId', async (req, res) => {

    try{
        await Product.findByIdAndRemove(req.params.phoneId);

        return res.status(200).send({ message: 'successfully deleted product' })
    }
    catch (err){

        if (err.kind === 'ObjectId') {
            return res.status(404).send({ error: 'The ID passed does not match any registered product' });
        }

        return res.status(500).send({ error: 'failed to delete the product, try again' })
    }

})

module.exports = app => app.use('/register', router);

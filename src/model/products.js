const mongoose = require('../database');
const moment = require('moment')

const ProductsSchema = new mongoose.Schema({
    model: {
        type: String,
        min: 2,
        max: 255,
        trim: true,
        required: true
    },

    price: {
        type: Number
    },

    brand: {
        type: String,
        min: 2,
        max: 255,
        trim: true,
        required: true
    },

    startDate:{
        type: Date,
        default: Date.now
    },

    endDate:{
        type: Date

    },

    color:{
        type: String,
        uppercase: true,
        enum: ['BLACK', 'WHITE', 'GOLD','PINK']

    },

    code:{
        type: mongoose.Schema.Types.ObjectId,
        max: 8
    }
})

ProductsSchema.pre('save', async function (next) {

    this.color.toUpperCase()

    next()
})

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;

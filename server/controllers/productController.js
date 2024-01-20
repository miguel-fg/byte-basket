const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// GET all products
const get_products = asyncHandler(async (req, res, next) => {
    const products = await Product.find().sort({ createdAt: -1 }).exec();

    res.status(200).json(products);
});

// GET single product
const get_single_product = asyncHandler(async (req, res, next) => {
    // validate ID
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({ error: "No such product" });
    }

    const product = await Product.findById(req.params.id).exec();

    if(!product) {
        return res.status(404).json({ error: "No such product "});
    }

    res.status(200).json(product);
});

// GET defined set of products
const get_number_products = asyncHandler(async (req, res, next) => {
    // Validate if num is a valid number
    const num = parseInt(req.params.num);

    if(isNaN(num) || num <= 0){
        return res.status(400).json({error: "Invalid value for num parameter" });
    }

    const products = await Product.find().limit(num).exec();

    res.status(200).json(products);
});

// POST a new product
const add_product = asyncHandler(async (req, res, next) => {
    const { name, quantity, limit, timesOrdered } = req.body;

    const product = await Product.create({
        name,
        quantity,
        limit,
        timesOrdered,
        nutritionInfo: {},
        picture: "",
    });

    res.status(200).json(product);
});

// DELETE a single product
const delete_product = asyncHandler(async (req, res, next) => {
    // validate ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({ error: "No such product" });
    }

    const product = await Product.findOneAndDelete({
        _id: req.params.id
    });

    if(!product){
        return res.status(404).json({error: "No such product"});
    }

    res.status(200).json(product);
});

module.exports = {
    get_products,
    get_single_product,
    get_number_products,
    add_product,
    delete_product,
};

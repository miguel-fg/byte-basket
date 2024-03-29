const express = require("express");

// controller
const {
    get_products,
    get_single_product,
    get_number_products,
    add_product,
    delete_product,
} = require("../controllers/productController");

// authentication middleware
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// GET all products
router.get("/", get_products);

// GET single product
router.get("/:id", get_single_product);

// GET defined set of products
router.get("/limit/:num", get_number_products);

// POST a new product
router.post("/", requireAuth , add_product);

// DELETE a single product
router.delete("/:id", requireAuth, delete_product);

module.exports = router;
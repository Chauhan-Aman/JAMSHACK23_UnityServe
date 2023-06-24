const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const Images = require('../models/Image')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')

// Route1: Get all Selling items using: GET "/api/product/fetchallproducts" . Login required
// router.get('/fetchallproducts', fetchuser, async (req, res) => {
//     try {
//         const products = await Product.find({ user: req.user.id })
//         res.json(products)
//     } catch (error) {
//         console.error(error.message)
//         res.status(500).send("Internal Server Error")
//     }
// })

// No user specific
router.get('/fetchallproducts', async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//Route2: Add new product in buy section using: POST "/api/product/addproduct". Login required
router.post('/addproduct', fetchuser, [
    body('Product_Name', 'Enter a valid title').isLength({ min: 3 }),
    body('Description', 'Atmost 200 characters').isLength({ max: 200 }),
    body('Phone', 'Enter a valid Phone Number').isLength({ max: 10 }),
    body('Email', 'Enter a valid email').isEmail()
], async (req, res) => {

    try {
        const { Product_Name, Description, Options, Owner_Name, College, Phone, Email, Instagram, Address, Amount } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const product = new Product({
            Product_Name, Description, Options, Owner_Name, College, Phone, Email, Instagram, Address, Amount, user: req.user.id
        })
        const SavedProduct = await product.save()
        res.json(SavedProduct)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//Route to upload image using POST: "/api/product/upload-image".Login required
router.post("/upload-image", fetchuser, async (req, res) => {
    const { base64 } = req.body;
    try {
        const Image = new Images({ image: base64 });
        const SavedImage = await Image.save()
        res.json(SavedImage)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})


//Route to Get image using GET: "/api/product/upload-image".Login required
router.get("/get-image", fetchuser, async (req, res) => {
    try {
        const Image = await Images.find({})
        res.json(Image)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//Route3: Search product in buy section using: GET "/api/product/searchproduct". Login required


//Route3: Delete a product in buy section using: DELETE "/api/procuts/deleteproduct". Login required
// (Working)



module.exports = router;
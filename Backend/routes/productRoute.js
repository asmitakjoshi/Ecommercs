const express = require("express")
const router = express.Router()
const {getProducts, postProduct} = require('../controllers/productsController')

router.get('/getprod', async (req, res) => await getProducts(req, res))
router.post('/create', async (req, res) => await postProduct(req, res))

module.exports = router
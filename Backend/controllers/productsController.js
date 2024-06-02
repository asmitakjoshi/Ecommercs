const mongoose = require("mongoose")
const Products = require("../models/Products")

const getProducts = async (req, res) => {
    const { category, company, rating, price, discount, limit } = req.query
    let queriesObj = {}
    if (category) {
        queriesObj.productCategory = category
    }
    if (company) {
        queriesObj.productCompany = company
    }
    if (rating) {
        queriesObj.productRating = {$lte: rating}
    }
    if (price) {
       queriesObj.productPrice = {$gte: price}
    }
    if(discount){
        queriesObj.productDiscount ={$gte: discount}
    }
    try{
        let products =await Products.find(queriesObj).select('-__v -updatedAt').sort({createdAt: -1})
        const totalCount =await Products.countDocuments(queriesObj)
        if(limit){
            if(limit === 10){
                products =await Products.find(queriesObj).limit(limit).select("__v -updatedAt").sort({createdAt: -1})
            }
            else{
                products = await Products.find(queriesObj).skip(limit -10).limit(limit).select("-__v -updatedAt").sort({createdAt: -1})
            }
        }
        res.status(200).json({
            message: "Success get data",
            data: products,
            count: totalCount
        })
    }
    catch (err){
        console.log(err)
        res.status(400).json({
            error: "error finding data"
        })
    }
}

const postProduct = async (req, res) => {
    try {
        const newdata =await Products.create(req.body)
        res.status(201).json({
            message: 'Success post product data',
            data: newdata
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            error: 'Failed post product data'
        })
    }
}

module.exports = {
    getProducts, postProduct
}
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose =require("./db")
const productRoute = require("./routes/productRoute")
require('dotenv').config()

mongoose;
// Middleware Connections
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/product',productRoute)

// Connection
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})
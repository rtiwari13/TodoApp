
const express = require('express'); // taking instance of express.js
const app = express(); //instantiating a server (app)

//load cofig from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo API
const todoRoutes = require('./routes/todo');
//add the todo API routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`SERVER started successfully at ${PORT}`);
})

//database connection
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE </h1>`);
})
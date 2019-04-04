const express = require("express");
const app = express();
const cors =  require('cors');

const {json} = require("body-parser");
const {coffee_shops} = require('./coffee.shops.model')
app.use(json());
app.use(cors());

app.get('/coffee-shops' , (req,res) => {
    // const {page , pageSize} = req.params;
    const {page , pageSize} = req.query;
    const from = (parseInt(page) - 1) * parseInt(pageSize);
    const to = from + parseInt(pageSize) - 1;
    const totalPages = coffee_shops.length;
    coffee_shops.find({})
    .then(coffee_shops => res.send(
        coffee_shops.filter((element, index) => 
          index >= from && index <= (from + parseInt(pageSize) - 1)
        )
    ));
})

app.listen( process.env.PORT || 4100 , ()=> console.log("Server start"));


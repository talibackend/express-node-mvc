const express = require("express");
const app = express();
const bp = require("body-parser");
const sequelize = require("./database/sequelize")
const seed = require("./database/seed");
const Product = require("./models/Product");

const IndexController = require("./controllers/IndexController");
const ProductsController = require("./controllers/ProductsController");

sequelize.sync({force : true}).then(async ()=>{
    console.log("Database connected");
    for(let i = 0; i < seed.length; i++){
        await Product.create(seed[i]);
    }
    console.log("Seed data added successfully.");
    app.listen(5000, ()=>{
        console.log("App is running on :5000");
    })
}).catch((err)=>{
    console.log(`Failed to connect to database, because : ${err}`);
})

app.use(bp.urlencoded({extended : true}));

app.set("view engine", "ejs");

app.get("/", async (req, res)=>{ await IndexController.home(req, res); })

app.get("/products", async (req, res)=>{ await ProductsController.products(req, res); });
app.post("/add-product", async (req, res)=>{ await ProductsController.addProduct(req, res); });


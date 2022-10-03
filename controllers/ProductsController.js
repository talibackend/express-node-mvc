const Product = require("../models/Product");

class ProductsController {
    async products(req, res) {
        const products = await Product.findAll();
        return res.render("products", { products });
    }
    async addProduct(req, res) {
        const { name, price } = req.body;
        const products = await Product.findAll();
        if (!name) {
            return res.render("products", { products, error: "Name is required.", price: Number(price), name });
        } else {
            if (!price && price <= 0) {
                return res.render("products", { products, error: "Price is required.", price: Number(price), name });
            } else {
                await Product.create({ name, price });
                return res.redirect("/products");
            }
        }
    }
}

module.exports = new ProductsController();
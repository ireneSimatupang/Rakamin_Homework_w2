const {Product} = require("../models")

class ProductControllers{
    //GET ALL PRODUK
    static async getAllProduct (req, res, next) {
        try{
            const products = await Product.findAll({
                order: [["createdAt", "DESC"]]
            });
            res.status(200).json(products);
        } catch (err) {
            next(err); 
        }
    }

    static async addProduct (req, res, next){
        try{
            const {name, price} = req.body;
            if (!name || !price){
                return res.status(400).json({message: "Semua  field wajib diisi"});
            }
            const newProduct = await Product.create({
                name, price
            });

            res.status(201).json(newProduct);
            console.log(newProduct);
            
        }catch(err){
            next(err);
        }
    }
}

module.exports = {ProductControllers}
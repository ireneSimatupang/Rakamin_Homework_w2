const { Product, Purchase, sequelize } = require("../models")
const { User } = require("../models");

class PurchaseControllers {
    static async addPurchase(req, res) {
        const t = await sequelize.transaction();
        try {
            const { productID } = req.body;

            if (!productID) {
                // return res.status(400).json({ message: "productID is required" });
                throw { status: 400, message: 'productId wajib diisi' }
            }

            // cek produk valid
            const product = await Product.findOne({
                where: {
                    email: req.user.email
                }
            });

            // console.log(product, "==> WHAT");

            // const dataUser = await User.findOne({
            //     where: {
            //         email: req.user.email
            //     }
            // });

            if (!product) {
                return res.status(404).json({ message: "produk tidak ditemukan" });
            }

            const newPurchase = await Purchase.create({
                UserId: req.User.id,
                productID
             }, {Transaction: t });
            
             await t.commit();

            res.status(201).json({
                message: "purchased successfully",
                data: newPurchase
            });
        } catch (error) {
            await t.rollback()
            res.status(500).json({ message: 'Gagal purchase', error: error.message });
        }
    }
}

module.exports = {PurchaseControllers};

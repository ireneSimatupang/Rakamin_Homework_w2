
const {UserControllers} = require("../controllers/UserControllers")
// const { PurchaseControllers } = require("../controllers/PurchaseControllers")
const route = require("express").Router()
const {authentication} = require ("../middlewares/authentication")
const {authorization} = require ("../middlewares/authorization")
const {ProductControllers} = require("../controllers/ProductControllers")


route.get("/", (req, res) => {
    res.send("SINI")
})

route.post("/api/register", UserControllers.registerUser    )


route.post("/api/login", UserControllers.loginUser)

route.get("/api/products", ProductControllers.getAllProduct);
route.post("/api/products", authentication, authorization, ProductControllers.addProduct)

// route.post("/api/purchase", authentication, PurchaseControllers.addPurchase)


// route.get("/api/users", authentication, UserControllers.getAllUsers)

module.exports = route
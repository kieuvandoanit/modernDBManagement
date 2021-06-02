const cartModel = require('../model/cart.model')
module.exports={
    getCart: async(req,res)=>{
        res.render("vwCart/Cart")
    }
}
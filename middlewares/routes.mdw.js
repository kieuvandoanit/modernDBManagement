const controller = require('../controller/homepage.controller')
module.exports=function(app){
    app.get('/',controller.homePage)
    app.use('/cart', require('../routes/cart.route'))
}
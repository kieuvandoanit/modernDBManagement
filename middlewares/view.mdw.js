const exphbs = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
// const numeral = require('numeral');

module.exports = function (app) {
  app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    extname: '.hbs',
    layoutsDir: 'views/_layouts',
    partialsDir: 'views/_partials',
  }));
  app.set('view engine', 'hbs');
}
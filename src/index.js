const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

//inicializaciones
const app = express();

//settings
const port = app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set("view engine", ".hbs");

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use(require('./routes/index'));
app.use('/links', require('./routes/links'));
app.use('/webservice', require('./routes/webservice'));

//startup
app.listen(app.get('port'), () => {
  console.log("Servidor iniciado en el puerto", port.settings.port);
});
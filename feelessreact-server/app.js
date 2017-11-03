const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*  ================ NOTE TO SELF ================== */
// React will handle all of the GET component of the code and if you want to 
// redirect to a page,have the backend return a JSON object with the boolean success, 
// the backend is always returning JSON objects the REACT front-end and that's how t
// hey communicate with each other. For example, you're at the login screen
// and when you login you want to redirect the user to the dashboard page, 
// you will have to return a JSON with the key/value - SUCCESS: TRUE for it to redirect,
// so when react gets a success, it will handle the redirection.
/*  ================================================ */

// Uncomment the following if you want to serve up static assets.
// (You must create the public folder)
/*
app.use(express.static('./public'));
*/

// Uncomment the following if you want to use handlebars
// on the backend. (You must create the views folder)
/*
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);
*/



// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers)


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    });
  });

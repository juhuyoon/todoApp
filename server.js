const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

// You just need it where you sync your sequelize, and sequelize the library will LOOK for your tables to create. 
const Post = require('./models/Post');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
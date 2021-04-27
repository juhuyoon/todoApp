const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWS_HOST) {
  sequelize = new Sequelize(process.env.JAWS_HOST);
} else {
  sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;

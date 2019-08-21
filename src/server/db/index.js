const { Pool } = require('pg');
const CREDENTIALS = require('./credentials');

const pool = new Pool(CREDENTIALS);

pool.connect()
  .then(() => console.log('Connected to DB!'))
  .catch((err) => console.log(`Error connecting to DB: ${err}`));

module.exports = {
  query: (text, params) => pool.query(text, params),
};

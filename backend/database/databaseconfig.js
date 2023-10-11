const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',    
  host: '127.0.0.1',   
  database: 'trab_recebimento', 
  password: 'postdba', 
  port: 5432,         
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
import { Pool } from 'pg';

import { db_url } from './env';

const pool = new Pool({
  connectionString: db_url,
});

// Testing Database connection (Remove this block on production)
pool.query('SELECT NOW()', (err, res) => {
  console.log(`Database URL = ${db_url}`);
  if (err) {
    console.log(`Database Not Connected ==> ${err.message}`);
  } else {
    console.log(`Database Connection estabished on ${res.rows[0].now}`);
  }
  pool.end();
});

export default {
  query: async (text, params) => {
    return await pool.query(text, params);
  },
};

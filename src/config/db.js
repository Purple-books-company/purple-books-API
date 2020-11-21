import { Pool } from 'pg';

import { db_url } from './env';

const pool = new Pool({
  connectionString: db_url,
});

//! Testing Database connection (Remove this block on production)
pool.query('SELECT NOW()', (err, res) => {
  console.info(`Database URL = ${db_url}`);
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
  //! Checking the Query Execution Time
  queryTimed: async (text, params) => {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount });
    return res;
  },
  //! check out a client from the pool to run several queries in a row in a transaction
  getClient: async () => {
    const client = await pool.connect();
    const query = client.query;
    const release = client.release;
    // set a timeout of 5 seconds, after which we will log this client's last query
    const timeout = setTimeout(() => {
      console.error('A client has been checked out for more than 5 seconds!');
      console.error(
        `The last executed query on this client was: ${client.lastQuery}`
      );
    }, 5000);
    // monkey patch the query method to keep track of the last query executed
    client.query = (...args) => {
      client.lastQuery = args;
      return query.apply(client, args);
    };
    client.release = () => {
      // clear our timeout
      clearTimeout(timeout);
      // set the methods back to their old un-monkey-patched version
      client.query = query;
      client.release = release;
      return release.apply(client);
    };
    return client;
  },
};

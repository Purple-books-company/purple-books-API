import { Pool } from 'pg';

import { db_url } from './env';

const pool = new Pool({
  connectionString: db_url,
});

export default {
  query: async (text, params) => {
    return await pool.query(text, params);
  },
};

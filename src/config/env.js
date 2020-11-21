import 'dotenv/config';

export const api_port = process.env.PORT || 8000;

const db_host = process.env.PGHOST || 'localhost';
const db_user = process.env.PGUSER || process.env.USER;
const db_name = process.env.PGDATABASE || process.env.USER;
const db_pass = process.env.PGPASSWORD || null;
const db_port = process.env.PGPORT || 5432;
export const db_url = `postgres://${db_user}:${db_pass}@${db_host}:${db_port}/${db_name}`;

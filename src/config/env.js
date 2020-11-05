require('dotenv').config();

console.log(process.env.NODE_ENV);

export const api_port = process.env.PORT || 8000;

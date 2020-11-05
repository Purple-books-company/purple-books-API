import express from 'express';
import cors from 'cors';
import compression from 'compression';

import { api_port } from './config';

const app = express();

app.use(cors());
app.use(compression());

app.get('/', (req, res, next) => {
  res.send('API Running...');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(api_port, () => {
  console.log(
    `Server started on port ${api_port} -> http://localhost:${api_port}`
  );
});

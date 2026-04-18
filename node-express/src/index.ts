import cookieSession from 'cookie-session';
import express from 'express';

import { router } from './routes/loginRoutes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['somesecret'] }));

app.use(router);

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});

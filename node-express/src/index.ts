import cookieSession from 'cookie-session';
import express from 'express';

import { AppRouter } from './AppRouter';
import './controllers/RootController';
import './controllers/LoginController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['somesecret'] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});

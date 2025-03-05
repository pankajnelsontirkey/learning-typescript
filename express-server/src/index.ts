import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { router as authRouter } from './routes/loginRoutes';
import { router as rootRouter } from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['randomString'] }));

app.use(rootRouter);
app.use(authRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

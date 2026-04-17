import { NextFunction, Request, Response } from 'express';
import { bodyValidator, controller, get, post, use } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request received at ${req.path}`);
  next();
};

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response) {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (
      // email &&
      // password &&
      email === 'test@test.com' &&
      password === 'testing'
    ) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  // router.get('/logout',
  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}

import { NextFunction, Request, Response } from 'express';

import { controller, get, use } from './decorators';
import { logger } from './LoginController';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('No Permission');
}

@controller('')
class RootController {
  @get('/')
  @use(logger)
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in!</div>
          <a href="/auth/logout">Logout</a>
        </div>
        `);
    } else {
      res.send(`
        <div>
          <div>You are NOT logged in!</div>
          <a href="/auth/login">Login</a>
        </div>  
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, you are logged in!');
  }
}

import { NextFunction, Request, RequestHandler, Response } from 'express';
import 'reflect-metadata';

import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!['PUT', 'POST', 'PATCH'].includes(req.method)) {
      next();
    }

    if (!req.body) {
      return res.status(422).send('Invalid request body!');
    }

    for (let key of keys) {
      if (!req.body[key]) {
        return res.status(422).send(`Missing property ${key}`);
      }
      next();
    }
  };
}

export function controller(rootRoute: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routerHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${rootRoute}${path}`,
          ...middlewares,
          validator,
          routerHandler
        );
      }
    });
  };
}

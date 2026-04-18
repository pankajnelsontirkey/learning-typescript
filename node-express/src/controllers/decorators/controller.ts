import 'reflect-metadata';

import express from 'express';

export const router = express.Router();

export function controller(rootRoute: string) {
  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routerHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);

      if (path) {
        router.get(`${rootRoute}${path}`, routerHandler);
      }
    });
  };
}

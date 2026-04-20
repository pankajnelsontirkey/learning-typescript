import 'reflect-metadata';

import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

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

      if (path) {
        router[method](`${rootRoute}${path}`, routerHandler);
      }
    });
  };
}

import 'reflect-metadata';

export function controller(rootRoute: string) {
  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routerHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
    });
  };
}

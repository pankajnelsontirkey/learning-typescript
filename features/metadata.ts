// import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// // Reflect.defineMetadata('note', 'hi there', plane);
// // Reflect.defineMetadata('height', '10', plane);

// // // console.log(plane);

// // const note = Reflect.getMetadata('note', plane);
// // const height = Reflect.getMetadata('height', plane);

// // console.log(note);
// // console.log(height);

// // attaches metadata `note = "hi there"` to `plane.color`
// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('The launch codes!')
  fly(): void {
    console.log('shooom!');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (const key of Object.getOwnPropertyNames(target.prototype)) {
    if (key === 'constructor') continue;
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log('secret', secret);
  }
}

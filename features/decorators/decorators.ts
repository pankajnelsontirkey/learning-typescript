@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Boat has sunk!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    // throw new Error();
    if (speed === 'fast') {
      console.log('Swish');
    } else {
      console.log('Nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log('[classDecorator]: ', constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log('[parameterDecorator]: ', key, index);
}

function testDecorator(target: any, key: string) {
  console.log('[testDecorator] key: ', key);
}

function logError(errorMessage: string) {
  return function logError(
    target: any,
    key: string,
    desc: PropertyDescriptor
  ): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot();

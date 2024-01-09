const { Square, Circle, Triangle } = require('./shapes.js');

describe('Triangle', () => {
    describe('Blue', () => {
      it('Should set the triangle color to blue.', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual(`<polygon points="50,15 100,85 0,85" style="fill:blue"/>`);
      });
    });
  });

describe('Square', () => {
describe('Red', () => {
    it('Should set the square color to red.', () => {
    const shape = new Square('red');
    expect(shape.render()).toEqual(`<rect width="80" height="80" x="10" y="10" style="fill:red"/>`);
    });
});
});

describe('Circle', () => {
    describe('Green', () => {
      it('Should set the circle color to green.', () => {
        const shape = new Circle('green')
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="40" style="fill:green"/>`);
      });
    });
  });








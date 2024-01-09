const { Square, Circle, Triangle } = require('./shapes.js');

class Logo {
    constructor(logoShape, logoColor, logoText) {
        this.logoShape = this.createShape(logoShape, logoColor);
        this.logoColor = logoColor;
        this.logoText = logoText;
    }

    createShape(shape, color) {
        switch (shape.toLowerCase()) {
            case 'square':
                return new Square(color);
            case 'circle':
                return new Circle(color);
            case 'triangle':
                return new Triangle(color);
            default:
                throw new Error('Invalid shape type');
        }
    }

    render() {
        return `<svg version="1.1"
                     width="300" height="200"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="white" />
                    ${this.logoShape.render()}
                    <text x="50" y="60" font-size="20" text-anchor="middle" fill="black">${this.logoText}</text>
                </svg>`;
    }
}

module.exports = Logo;
class Shape {
    constructor(logoColor) {
        this.logoColor = logoColor;
    }

    render() {
        
    }
}

class Square extends Shape {
    render() {
        return `<rect width="80" height="80" x="10" y="10" style="fill:${this.logoColor}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="50,15 100,85 0,85" style="fill:${this.logoColor}"/>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" style="fill:${this.logoColor}"/>`;
    }
}


module.exports = {
    Square,
    Triangle,
    Circle
};

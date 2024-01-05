class Shape {
    constructor(logoColor, logoText) {
        this.logoColor = logoColor;
        this.logoText = logoText;
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

class Star extends Shape {
    render() {
        
        return `<polygon points="50,15 61,61 98,61 67,85 78,131 50,105 22,131 33,85 2,61 39,61" style="fill:${this.logoColor}"/>`;
    }
}

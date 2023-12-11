// Creates a class called Shape which has a constructor initializing 'color' and sets the 'color' value.
class Shape {
  constructor() {
      this.color = '';
  }

  setColor(color) {
      this.color = color;
  }

  // Placeholder for the renderSVG method
  renderSVG() {
      throw new Error('renderSVG method must be implemented in each shape subclass');
  }
}

// Creates a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle extends Shape {
  renderSVG() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
  }
}

// Creates a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
class Square extends Shape {
  renderSVG() {
      return `<rect x="50" height="200" width="200" fill="${this.color}">`;
  }
}

// Creates a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon) with position, size, and fill color based on the current instance's properties.
class Triangle extends Shape {
  renderSVG() {
      // Uncomment the following line if you want to use a different SVG for the Triangle.
      // return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">`;
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`;
  }
}

module.exports = { Circle, Square, Triangle };

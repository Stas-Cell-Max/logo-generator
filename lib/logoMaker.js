//This file will contain the logic for generating the SVG logo based on user input


// logoMaker.js
var { Triangle, Circle, Square } = require('./shapes');

class LogoMaker {
  constructor(text, textColor, shapeType, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeType = shapeType;
    this.shapeColor = shapeColor;
  }

  generateSVG() {
    // Check the shapeType and create the corresponding shape
    let shape;

    switch (this.shapeType.toLowerCase()) {
      case 'triangle':
        shape = new Triangle(100, this.shapeColor); // Adjust the size if needed
        break;
      case 'circle':
        shape = new Circle(50, this.shapeColor); // Adjust the radius if
      case 'square':
        shape = new Square(100, this.shapeColor); // Adjust the size if needed
        break;
      default:
        throw new Error('Invalid shape type');
    }

    // Generate the SVG markup for the shape
    var shapeSVG = shape.renderSVG();

    // You can add more logic here to incorporate text or other features
    var textSVG = `<text x="10" y="20" fill="${this.textColor}">${this.text}</text>`;

    // Combine the shape and text SVG
    var svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      ${textSVG}
    </svg>`;

    return svgMarkup;
  }
}

module.exports = LogoMaker;

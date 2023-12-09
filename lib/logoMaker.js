// This file contains the logic for generating the SVG logo based on user input

var svg2img = require('svg2img');

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
        shape = new Circle(50, this.shapeColor); // Adjust the radius if needed
        break;
      case 'square':
        shape = new Square(100, this.shapeColor); // Adjust the size if needed
        break;
      default:
        throw new Error('Invalid shape type');
    }

    // Generate the SVG markup for the shape
    var shapeSVG = shape.renderSVG();

    var textSVG = `<text x="10" y="20" fill="${this.textColor}">${this.text}</text>`;

    var svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSVG}
        ${textSVG}
      </svg>
    `;

    return svgMarkup.trim();
  }

  async saveAsImage() {
    var svg = this.generateSVG();
    var buffer = Buffer.from(svg, 'utf-8');

    return new Promise((resolve, reject) => {
      svg2img(buffer, { format: 'png', width: 300, height: 200 }, (error, buffer) => {
        if (error) {
          reject(error);
        } else {
          fs.writeFileSync('./examples/logo.png', buffer);
          resolve('Image saved successfully.');
        }
      });
    });
  }
}

module.exports = LogoMaker;
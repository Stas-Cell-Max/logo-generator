//This file will contain the logic for generating the SVG logo based on user input


const { Triangle, Circle, Square } = require('./shapes');

class LogoMaker {
  constructor(text, textColor, shapeType, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeType = shapeType;
    this.shapeColor = shapeColor;
  }

  generateSVG() {
    // Logic for generating the SVG logo based on user input
    // Use the provided text, text color, shape type, and shape color
    // Return the generated SVG string
  }
}

module.exports = LogoMaker;

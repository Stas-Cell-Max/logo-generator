class Square {
    // Constructor to initialize size and color
    constructor(size, color) {
      this.size = size;
      this.color = color;
    }
  
    // Method to generate SVG markup for the square
    renderSVG() {
      return `<svg width="${this.size}" height="${this.size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${this.size}" height="${this.size}" fill="${this.color}" />
      </svg>`;
    }
  }
  
  module.exports = Square;
  
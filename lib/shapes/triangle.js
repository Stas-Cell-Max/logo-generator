class Triangle {
    // Constructor to initialize size and color
    constructor(size, color) {
      this.size = size;
      this.color = color;
    }
  
    // Method to generate SVG markup for the triangle
    renderSVG() {
      return `<svg width="${this.size}" height="${this.size}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,${this.size} ${this.size},${this.size} ${this.size / 2},0" fill="${this.color}" />
      </svg>`;
    }
  }
  
  module.exports = Triangle;
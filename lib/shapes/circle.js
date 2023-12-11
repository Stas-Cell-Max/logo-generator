class Circle {
    // Constructor to initialize radius and color
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    // Method to generate SVG markup for the circle
    renderSVG() {
      return `<svg width="${this.radius * 2}" height="${this.radius * 2}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
      </svg>`;
    }
  }
  
  module.exports = Circle;
  
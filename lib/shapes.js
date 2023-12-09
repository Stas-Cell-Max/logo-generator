
//This file will export classes for the different shapes needed to support in the logo maker

// Class for rendering a triangle in SVG format
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

// Class for rendering a circle in SVG format
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

// Class for rendering a square in SVG format
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

// Exporting the shape classes for external use
module.exports = {
  Triangle,
  Circle,
  Square,
};

  
const fs = require('fs');
const svg2img = require('svg2img');

class LogoMaker {
  // Constructor for LogoMaker class
  constructor(text, textColor, shape) {
    this.text = text;           // Input text for the logo
    this.textColor = textColor; // Text color for the logo
    this.shape = shape;         // Shape instance for the logo
  }

  // Method to generate SVG markup for the logo
  generateSVG() {
    // Get the SVG markup for the shape and text elements
    const shapeSVG = this.shape.renderSVG();  // SVG markup for the shape
    const textSVG = `<text x="10" y="20" fill="${this.textColor}">${this.text}</text>`; // SVG markup for the text element

    // Combine shape and text SVG elements within an overall SVG container
    const svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSVG}
        ${textSVG}
      </svg>
    `;

    // Return the trimmed SVG markup
    return svgMarkup.trim();
  }

  // Method to save the generated SVG as an image file
  async saveAsImage() {
    // Generate SVG markup
    const svg = this.generateSVG();
    const buffer = Buffer.from(svg, 'utf-8');

    // Use svg2img to convert SVG to PNG image
    return new Promise((resolve, reject) => {
      svg2img(buffer, { format: 'png', width: 300, height: 200 }, (error, buffer) => {
        if (error) {
          reject(error);  // Reject the promise if there is an error
        } else {
          // Write the PNG buffer to a file
          fs.writeFileSync('./examples/logo.png', buffer);
          resolve('Image saved successfully.');  // Resolve the promise if image is saved successfully
        }
      });
    });
  }
}

module.exports = LogoMaker;  // Export the LogoMaker class

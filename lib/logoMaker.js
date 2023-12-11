const fs = require('fs');
const svg2img = require('svg2img');

class LogoMaker {
  // Constructor for LogoMaker class.
  // Initializes text, textColor, and shape properties based on user input.
  constructor(text, textColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
  }

  // Method to generate the SVG markup for the logo.
  generateSVG() {
    // Generate SVG markup for the shape and text components.
    const shapeSVG = this.shape.renderSVG();
    const textSVG = `<text x="10" y="20" fill="${this.textColor}">${this.text}</text>`;
  
    // Combine shape and text SVG components into a complete SVG markup.
    const svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSVG}
        ${textSVG}
      </svg>
    `;
  
    // Log the generated SVG for debugging purposes.
    console.log('Generated SVG:', svgMarkup);
  
    // Return the trimmed SVG markup.
    return svgMarkup.trim();
  }

  // Method to save the generated SVG as an image file (PNG).
  async saveAsImage() {
    // Generate the SVG markup.
    const svg = this.generateSVG();
    // Convert SVG to PNG buffer.
    const buffer = Buffer.from(svg, 'utf-8');

    // Return a promise for asynchronous processing.
    return new Promise((resolve, reject) => {
      // Use svg2img library to convert SVG buffer to PNG buffer.
      svg2img(buffer, { format: 'png', width: 300, height: 200 }, (error, buffer) => {
        if (error) {
          // Reject the promise if an error occurs during the conversion.
          reject(error);
        } else {
          // Write the PNG buffer to the 'logo.png' file in the 'examples' folder.
          fs.writeFileSync('./examples/logo.png', buffer);
          // Resolve the promise with a success message.
          resolve('Image saved successfully.');
        }
      });
    });
  }
}

// Export the LogoMaker class for use in other modules.
module.exports = LogoMaker;

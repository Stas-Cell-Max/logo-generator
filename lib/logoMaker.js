const { writeFile } = require('fs/promises'); // Import the writeFile function from the fs/promises module
const svg2img = require('svg2img'); // Import the svg2img module for converting SVG to PNG

class LogoMaker {
  constructor(text, textColor, shape) {
    this.text = text; // Input text
    this.textColor = textColor; // Text color
    this.shape = shape; // Shape object (Circle, Square, or Triangle)
  }

  async generateSVG() {
    const shapeSVG = this.shape.renderSVG(); // Generate SVG markup for the shape
    const textSVG = `<text x="10" y="20" fill="${this.textColor}">${this.text}</text>`; // SVG markup for the text

    const svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSVG}
        ${textSVG}
      </svg>
    `;

    console.log('Generated SVG:', svgMarkup); // Log the generated SVG

    // Save the SVG markup to "logo.svg"
    try {
      await writeFile('logo.svg', svgMarkup, 'utf-8');
      console.log('SVG saved as "logo.svg"');
    } catch (error) {
      console.error('Error saving SVG:', error);
    }

    return svgMarkup.trim(); // Return the trimmed SVG markup
  }

  async saveAsImage() {
    const svg = this.generateSVG(); // Generate the SVG markup
    const buffer = Buffer.from(svg, 'utf-8'); // Convert SVG to a buffer

    return new Promise((resolve, reject) => {
      // Convert SVG buffer to PNG image
      svg2img(buffer, { format: 'png', width: 300, height: 200 }, (error, buffer) => {
        if (error) {
          reject(error); // Reject the promise if there's an error
        } else {
          // Save the PNG image as "logo.png"
          writeFile('./examples/logo.png', buffer)
            .then(() => {
              console.log('Image saved as "logo.png"');
              resolve('Image saved successfully.'); // Resolve the promise on successful image save
            })
            .catch((writeError) => {
              console.error('Error saving image:', writeError);
              reject(writeError); // Reject the promise if there's an error saving the image
            });
        }
      });
    });
  }
}

module.exports = LogoMaker;

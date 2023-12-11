const fs = require('fs');
const svg2img = require('svg2img');

class LogoMaker {
  constructor(text, textColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
  }

  generateSVG() {
    const shapeSVG = this.shape.renderSVG();
    const textSVG = `<text x="10" y="20" fill="${this.textColor}">${this.text}</text>`;

    const svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSVG}
        ${textSVG}
      </svg>
    `;

    return svgMarkup.trim();
  }

  async saveAsImage() {
    const svg = this.generateSVG();
    const buffer = Buffer.from(svg, 'utf-8');

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

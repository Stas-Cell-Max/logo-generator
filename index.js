// This is a basic structure that sets up the classes for different shapes and a LogoMaker class for generating the logo

var readline = require('readline');
var LogoMaker = require('./lib/logoMaker');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

async function runLogoMaker() {
    var text = await getUserInput('Enter text (up to three characters): ');
    var textColor = await getUserInput('Enter text color: ');
    var shapeType = await getUserInput('Choose a shape (circle, triangle, square): ');
    var shapeColor = await getUserInput('Enter shape color: ');

    var logoMaker = new LogoMaker(text, textColor, shapeType, shapeColor);
    var svgLogo = logoMaker.generateSVG();

  console.log(svgLogo);
  console.log('Generated logo.svg');
  rl.close();
}

runLogoMaker();

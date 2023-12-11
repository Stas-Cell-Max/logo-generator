const readline = require('readline');
const LogoMaker = require('./lib/logoMaker');
const { Circle, Square, Triangle } = require('./shapes');

const rl = readline.createInterface({
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
  const text = await getUserInput('Enter text (up to three characters): ');
  const textColor = await getUserInput('Enter text color: ');
  const shapeType = await getUserInput('Choose a shape (circle, triangle, square): ');
  const shapeColor = await getUserInput('Enter shape color: ');

  let shape;

  switch (shapeType.toLowerCase()) {
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    default:
      console.log('Invalid shape type');
      rl.close();
      return;
  }

  shape.setColor(shapeColor);

  const logoMaker = new LogoMaker(text, textColor, shape);

  const svgLogo = logoMaker.generateSVG();

  await logoMaker.saveAsImage();

  console.log(svgLogo);
  console.log('Image saved as "logo.png" in the "examples" folder.');

  rl.close();
}

runLogoMaker();

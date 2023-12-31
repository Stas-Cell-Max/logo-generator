// Importing the 'readline' module for handling user input in the command line
const readline = require('readline');
// Importing the 'LogoMaker' class from the './lib/logoMaker' module
const LogoMaker = require('./lib/logoMaker');
// Assuming your 'shapes.js' module is in the same directory
const { Circle, Square, Triangle } = require('./lib/shapes');

// Creating a readline interface for reading input and writing output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get user input with a provided prompt
function getUserInput(prompt) {
  // Returning a Promise that resolves with the user's input
  return new Promise((resolve) => {
    // Asking the user the specified prompt and resolving with the answer
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

// Asynchronous function to run the logo maker application
async function runLogoMaker() {
  // Getting user input for logo text, text color, shape type, and shape color
  const text = await getUserInput('Enter text (up to three characters): ');
  const textColor = await getUserInput('Enter text color: ');
  const shapeType = await getUserInput('Choose a shape (circle, triangle, square): ');
  const shapeColor = await getUserInput('Enter shape color: ');

  let shape;

  // Check the shapeType and create the corresponding shape instance
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

  // Set the color for the selected shape
  shape.setColor(shapeColor);

  // Create an instance of the LogoMaker class with user input
  const logoMaker = new LogoMaker(text, textColor, shape);

  // Generate the SVG logo using the LogoMaker instance
  const svgLogo = logoMaker.generateSVG();

  // Save the SVG logo as an image
  await logoMaker.saveAsImage();

  // Log the generated SVG logo to the console
  console.log(svgLogo);
  // Let the user know where the file is saved
  console.log('Image saved as "logo.png" in the "examples" folder.');

  // Closing the readline interface
  rl.close();
}

// Invoking the runLogoMaker function to start the application
runLogoMaker();

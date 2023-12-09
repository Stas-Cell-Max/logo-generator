
var readline = require('readline'); // Importing the 'readline' module for handling user input in the command line

var LogoMaker = require('./lib/logoMaker'); // Importing the 'LogoMaker' class from the './lib/logoMaker' module

var fs = require('fs');

// Creating a readline interface for reading input and writing output
var rl = readline.createInterface({
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
    var text = await getUserInput('Enter text (up to three characters): ');
    var textColor = await getUserInput('Enter text color: ');
    var shapeType = await getUserInput('Choose a shape (circle, triangle, square): ');
    var shapeColor = await getUserInput('Enter shape color: ');
  
    // Creating an instance of the LogoMaker class with user input
    var logoMaker = new LogoMaker(text, textColor, shapeType, shapeColor);
  
    // Generating the SVG logo using the LogoMaker instance
    // Generating the SVG logo using the LogoMaker instance
  var svgLogo = logoMaker.generateSVG();

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

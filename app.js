//pulls in functions from rectangle.js to use in this file - require is part of node, not vanilla JS
import {rectangle} from './rectangle.js';

const rect = rectangle; //rect now refers to a function, not an object

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

  //callback function definition
  rect(l, w, (err, rectangle) => {
    //checking to see if there is an error
    if (err) {
      console.log('ERROR: ', err.message);
    } else {
      console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`); //object name is now rectangle as defined in parameter list (also removed parameters since in other function)
      console.log(`Permieter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
    }
  });
  //to see what the order is the the code is being executed - will execute this before showing solutions - solutions will show at the end after the timeouts but still allow other code to run while loading
  console.log('This statement is logged after the call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
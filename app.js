//pulls in functions from rectangle.js to use in this file - require is part of node, not vanilla JS
const rect = require('./rectangle');

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

  if (l <=0 || w<=0) {
    console.log(`Rectangle dimensions must be greater than or equal to zero. Received: ${l}, ${w}`);
  } else {
    console.log(`Area of rectangle: ${rect.area(l,w)}`);
    console.log(`Permieter of rectangle: ${rect.perimeter(l,w)}`);
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
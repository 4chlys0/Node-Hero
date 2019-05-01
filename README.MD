src
https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/

//Brief Notes
//Part 1
package.json - A file with a JSON representation of the application + its dependencies
		generated with npm init in desired directory

modularization - /app/index.js contains the values while /app/calc.js contains addition function.
		 referenced as "const calc = require('./calc')" and "calc.<functi onName>"
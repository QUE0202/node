exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };

var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));

module.exports = {
    area: function(width) {
      return width * width;
    },
  
    perimeter: function(width) {
      return 4 * width;
    }
  };

  console.log('First');
console.log('Second');

setTimeout(function() {
    console.log('First');
    }, 3000);
 console.log('Second');

 app.get('/', function(req, res) {
    res.send('Hello World!');
  });

  
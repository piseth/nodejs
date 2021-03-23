var fs = require('fs');

fs.appendFile('append file.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
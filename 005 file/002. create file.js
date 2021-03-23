var fs = require('fs');

fs.writeFile('create file.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
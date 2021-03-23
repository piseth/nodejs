var fs = require('fs');

fs.rename('test1.txt', 'test2.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
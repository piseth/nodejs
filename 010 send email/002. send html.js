var nodemailer = require('nodemailer');

/*var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});*/

// http://nilhcem.com/FakeSMTP/download.html
let transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 25,
});

var mailOptions = {
  from: 'sokpiseth@gmail.com',
  to: 'sokpiseth@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
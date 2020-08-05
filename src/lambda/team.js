
var sesAccessKey = 'kintiger2020@gmail.com'
var sesSecretKey = 'qwe123QWE!@#'

 exports.handler = function(event, context, callback) {
    const requestBody = JSON.parse(event.body);
    const emailBody = requestBody.text;
  	var nodemailer = require('nodemailer');
  	var smtpTransport = require('nodemailer-smtp-transport');

  	var transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      host: 'smtp.example.com',
      port: 587,
      secure: false,
	    auth: {
	        user: sesAccessKey,
	        pass: sesSecretKey
	    }
  	}));

  	var text = 'Email body goes here';

  	var mailOptions = {
	    from: 'kintiger2020@gmail.com',
	    to: 'goming49@gmail.com',
	    subject: 'Test subject',
	    text: text
  	};

  	transporter.sendMail(mailOptions, function(error, info){
      if(error){
        const response = {
          statusCode: 500,
          body: JSON.stringify({
            error: error.message,
          }),
        };
        callback(null, response);
      }
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Email processed succesfully!`
        }),
      };
      callback(null, response);
    });
}
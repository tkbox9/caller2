var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {


	// Twilio Credentials 
	var accountSid = 'AC5b39297c6e639009a42ef402361e75a1';
	var authToken = 'd1eefe387e549b794996976dfd239e54';

	//require the Twilio module and create a REST client 
	var client = require('twilio')(accountSid, authToken);
	var phoneToCall = '';

	if (req.query.phone) {

		if (req.query.phone.charAt(0) == '0') {
			console.log('removing 0');
			var p = req.query.phone.substr(1);
			console.log('adding +44');
			phoneToCall = '+44' + p;
		}

	} else {
		phoneToCall = '+447774495441';
	}


	client.calls.create({
		to: phoneToCall,
		from: "+441455561002",
		url: "http://9180056e.ngrok.io/images/voice.xml",
	}, function (err, call) {
		console.log('error');
	});

	res.send('Call placed - ' + phoneToCall);

});


module.exports = router;
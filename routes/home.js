module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Home Page.  '
        })
    });

    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', {
            title: 'Chat with Me!  '
        })
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', {
            title: 'About Me.  '
        })
    });



    // call function
    app.get('/call', function (req, res) {
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
            phoneToCall = '+447876137265';
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

}
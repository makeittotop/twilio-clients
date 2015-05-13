var data = {
    From: "+14805265812",
    To: "+971525196742",
    Body: "Alert: Test",
    StatusCallback: "http://106.187.50.144:9999/twilio"
};

data_string = ''
for(i=0; i<Object.keys(data).length; i++) {
  data_string += Object.keys(data)[i]+"="+encodeURIComponent(data[Object.keys(data)[i]])
  if(i < Object.keys(data).length - 1) {
   data_string += "&";
   }
} 

var options = {
      host: 'api.twilio.com',
      port: 443,
      path: '/2010-04-01/Accounts/AC748702fc738d6f16455dd418b93a67d1/Messages.json',
      method: 'POST',
      auth: '8C748702fc738d6f16455dd418b93a67d1:5b6293592a8c4a8e6ba2a36ea6ce1ec8',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': data_string.length
      }
};


var https = require('follow-redirects').https;

// var https = require('https');

//var http = require('http');

var resultObject;

// Setup the request.  The options parameter is
// the object we defined above.
var req = https.request(options, function(res) {
  res.setEncoding('utf-8');

  var responseString = '';

  res.on('data', function(data) {
    responseString += data;
  });

  res.on('end', function() {
    // resultObject = JSON.parse(responseString);
    resultObject = responseString;
  });
});

req.on('error', function(e) {
  // TODO: handle error.
});

req.write(data_string);
req.end();

typeof resultObject;

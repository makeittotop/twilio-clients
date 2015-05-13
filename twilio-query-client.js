# npm install follow-redirects

var https = require('follow-redirects').https;

/*
* http and https are just like Node.js' http and https modules except
* that they follow redirects seamlessly.
*/

var options = {
    //host: "www.google.com",
    host: "api.twilio.com",
    path : "/2010-04-01/Accounts/AC748702fc738d6f16455dd418b93a67d1/Messages/SM48645fe79370463797ea76ae70ae4897.json",
    auth: "8C748702fc738d6f16455dd418b93a67d1:5b6293592a8c4a8e6ba2a36ea6ce1ecA"
}

https.get(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        //console.log(chunk.toString());
        data += chunk.toString();
    });

    res.on('end', function () {
        var json;
        try {
            json = JSON.parse(data);
            console.log(json);
        }
        catch (e) {
            // Not json
            console.log(data);
        }
    });
}).on('error', function (err) {
console.error(err);
});

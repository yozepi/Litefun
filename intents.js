'use strict';

require('dotenv').config();
var request = require('request-promise');

var launchIntent = function (options) {
    options.alexa.emit(':say', 'Let\'s have a little lite fun. say minions.', 'Are you still there?');
};

var minionIntent = function (options) {

    var url = 'https://api.lifx.com/v1/lights/' + process.env.LIGHT_ID + '/effects/pulse'
    request({
        method: 'POST',
        uri: url,
        form: {
            color: 'red',
            from_color: 'blue',
            period: '1.0',
            cycles: '5.0',
            persist: 'false'
        },
        headers: {
            'Authorization': 'Bearer ' + process.env.TOKEN
        }
    }).then(function (result) {
        options.alexa.emit(':tell', '<audio src="http://litefun.s3-website-us-west-2.amazonaws.com/beedo_beedo.mp3" />');
    }).catch(function (err) {
        console.log(err);
        options.alexa.emit(':tell', 'Oh oh, Something went terribly wrong!');
    });
};

module.exports = {
    launchIntent: launchIntent,
    minionIntent: minionIntent
};
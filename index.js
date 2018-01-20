var Alexa = require('alexa-sdk');
var intents = require('./intents');

exports.handler = function (event, context, callback) {

  var alexa = Alexa.handler(event, context);
  alexa.appId = process.env.ALEXA_ID;

  var intentHandlers = {
    'LaunchRequest': function () { intents.launchIntent({ alexa: this }); },
    'MinionsIntent': function () { intents.minionIntent({ alexa: this }); },
  };

  alexa.registerHandlers(intentHandlers);
  alexa.execute();

};


'use strict';

var intents = require('./intents');

var alexaStub = {
    emit: function (cmd, speach, listen) {
        console.log([cmd, speach, listen]);
    }
};

intents.launchIntent({alexa: alexaStub});
intents.minionIntent({alexa: alexaStub});


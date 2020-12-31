const globalVarsObjs = require('../Objects/GlobalVarsObjects.js');

var waldyBot = globalVarsObjs.globalVarObject.waldyBot;
var waldyBotBeta = globalVarsObjs.globalVarObject.waldyBotBeta;
var cmdHelp = globalVarsObjs.commandVarObject.cmdHelp;
var helpFile = globalVarsObjs.filesObject.helpFile;

// Helpfile Responses:
// helpFileResponsesObject's Method
var helpFileResponsesObjectMethod = function(client) {
    client.on('message', message => {
        if(message.content.toLowerCase() === cmdHelp) {
            message.author.createDM(message.author.send(helpFile));
        };
        if(message.content.toLowerCase() === cmdHelp + 'test') {
            message.author.createDM(message.author.send('this is a TEST'));
        };
        //if (message.isMemberMentioned(waldyBot) === true) { 
        //    message.author.createDM(message.author.send(helpFile));
        //};
        if (message.isMemberMentioned(waldyBotBeta) === true) { 
            message.author.createDM(message.author.send(helpFile));
        };
    });
}
// Objects
var helpFileResponsesObject = {
    helpFileResponsesObjectMethod: helpFileResponsesObjectMethod 
}

var exportobject = {
    helpFileResponsesObject: helpFileResponsesObject
}

module.exports = exportobject;
// !translate [language] [sentence]

const fs = require('fs');
const translatemsg = require('translate-google');

exports.run = async function translate(client, channel, user, message, self, args, ops, viewer){

	var camp = message.split(" ");
	var language = camp[1];

	if(!language){
		client.say(channel, "/me Não foi possível realizar a tradução: idioma e frase não providenciados. Lista de idiomas suportados: https://github.com/shikar/NODE_GOOGLE_TRANSLATE/blob/master/languages.js");
		return;
	};

	var originalSentence =  message.slice(camp[0].length + language.length + 2);

	if(!originalSentence){
		client.say(channel, "/me Não foi possível realizar a tradução: frase não providenciada.");
		return;
	};

	try{

		var translatedSentence =  await translatemsg(originalSentence, {to: language});
		client.say(channel, "/me Mensagem de @" + user["display-name"] + " traduzida para " + language +" : " + translatedSentence);

	} catch (err){
		client.say(channel, "/me Não foi possível realizar a tradução: idioma não existe / não é suportado. Lista de idiomas suportados: https://github.com/shikar/NODE_GOOGLE_TRANSLATE/blob/master/languages.js");
		return;
	};

};
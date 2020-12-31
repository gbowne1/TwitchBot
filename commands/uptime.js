// !uptime

exports.run = async function uptime(client, channel, user, message, self, args, ops, viewer){

	client.api({
		url: "https://decapi.me/twitch/uptime?channel=" + channel.substr(1),

	}, (err, res, body) => {
			console.log(body);
			client.say(channel, "/me " + channel.substr(1) + " está em live há: " + body);
	});

};
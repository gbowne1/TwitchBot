// !points

const fs = require("fs");

exports.run = async function points(client, channel, user, message, self, args, ops, viewer){
	var mypointconfig = fs.readFileSync(__dirname + '/../info/points.json');
	var pointconfig = JSON.parse(mypointconfig);

	if(!viewer[user['username']]){
		viewer[user['username']] = {
			online: 1,
			points: 0
		};
		fs.writeFileSync(__dirname + '/../data/data.json', JSON.stringify(viewer, null, 2));
	};

	client.say(channel, "/me @" + user['display-name'] + " tem " + viewer[user['username']].points + " " + pointconfig.Name + ".");
};


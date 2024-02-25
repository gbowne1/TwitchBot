// commands/lurk.js
module.exports = async function lurk(twitchClient, channel, userstate) {
  const username = userstate.username;
  twitchClient.say(channel, `${username} is now lurking. Enjoy your lurk!`);
};

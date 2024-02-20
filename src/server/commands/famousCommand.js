// commands/famousCommand.js

module.exports = async function famousCommand(twitchClient, channel) {
  twitchClient.on("message", (channel, tags, message, self) => {
    if (self) return; // Ignore messages from the bot

    if (message.match(/famous/)) {
      twitchClient.ban(channel, tags["username"]);
    }
  });
};

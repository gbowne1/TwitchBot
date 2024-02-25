// commands/discord.js
module.exports = async function discord(twitchClient, channel) {
  const discordLink = "https://discord.gg/your-invite-code";
  twitchClient.say(channel, `Join our Discord server: ${discordLink}`);
};

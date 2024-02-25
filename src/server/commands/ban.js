// commands/ban.js
module.exports = async function ban(
  twitchClient,
  channel,
  userstate,
  argument
) {
  const username = argument.trim();

  if (!username) {
    twitchClient.say(channel, "Please provide a username to ban.");
    return;
  }

  twitchClient
    .ban(channel, username, "Banned by bot command")
    .then(() => {
      twitchClient.say(channel, "${username} has been banned.");
    })
    .catch((error) => {
      console.error("Error banning user:", error.message);
    });
};

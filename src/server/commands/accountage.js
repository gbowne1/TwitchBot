// commands/accountage.js
module.exports = async function accountage(twitchClient, channel, userstate) {
  // Retrieve account creation date using Twitch API
  // (Not possible with Twitch.js alone, so you need to use another library or API call)
  const accountCreationDate = "2018-01-01"; // Replace with actual account creation date
  const username = userstate.username;
  twitchClient.say(
    channel,
    `${username}'s account was created on ${accountCreationDate}.`
  );
};

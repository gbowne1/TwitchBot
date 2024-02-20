// commands/followage.js
module.exports = async function followage(twitchClient, channel, userstate) {
  // Retrieve followage information using Twitch API
  // (Not possible with Twitch.js alone, so you need to use another library or API call)
  const followage = "2 years 1 month"; // Replace with actual followage data
  const username = userstate.username;
  twitchClient.say(
    channel,
    `\${username} has been following \${channel} for \${followage}.`
  );
};

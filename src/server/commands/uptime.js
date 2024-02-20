// commands/uptime.js
const axios = require("axios");

module.exports = async function uptime(twitchClient, channel) {
  try {
    const response = await axios.get(
      `https://api.twitch.tv/helix/streams?user_login=\${channel}`,
      {
        headers: {
          "Client-ID": "your_client_id",
          Authorization: `Bearer your_oauth_token`,
        },
      }
    );

    const stream = response.data.data[0];

    if (stream) {
      const startedAt = new Date(stream.started_at);
      const uptime = Math.floor((Date.now() - startedAt) / 60000);
      twitchClient.say(channel, `Stream has been live for \${uptime} minutes.`);
    } else {
      twitchClient.say(channel, "Stream is not live.");
    }
  } catch (error) {
    console.error("Error fetching stream information:", error.message);
  }
};

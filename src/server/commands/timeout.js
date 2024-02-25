// commands/timeout.js
module.exports = async function timeout(
  twitchClient,
  channel,
  userstate,
  argument
) {
  const [username, duration] = argument.split(" ");

  if (!username || !duration) {
    twitchClient.say(
      channel,
      "Please provide a username and duration for the timeout."
    );
    return;
  }

  twitchClient
    .timeout(
      channel,
      username,
      parseInt(duration, 10),
      "Timed out by bot command"
    )
    .then(() => {
      twitchClient.say(
        channel,
        `${username} has been timed out for ${duration} seconds.`
      );
    })
    .catch((error) => {
      console.error("Error timing out user:", error.message);
    });
};

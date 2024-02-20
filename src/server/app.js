const _ = require("lodash");
const uuid = require("uuid");
const socketIO = require("socket.io");
const dotenv = require("dotenv");
const tmi = require("tmi.js");

dotenv.config();

const uptimeCommand = require("./commands/uptime");
const projectCommand = require("./commands/project");
const lurkCommand = require("./commands/lurk");
const discordCommand = require("./commands/discord");
const followageCommand = require("./commands/followage");
const accountageCommand = require("./commands/accountage");
const banCommand = require("./commands/ban");
const timeoutCommand = require("./commands/timeout");
const commandsCommand = require("./commands/commands");

// Twitch.tv bot setup
const twitchClient = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_PASSWORD,
  },
  channels: [process.env.TWITCH_CHANNEL],
});

twitchClient.connect();

twitchClient.on("message", async (channel, userstate, message, self) => {
  if (self) return;

  const [raw, command, argument] = message.match(
    /^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/
  );

  switch (command) {
    case "uptime":
      await uptimeCommand(twitchClient, channel);
      break;
    case "project":
      await projectCommand(twitchClient, channel, argument);
      break;
    case "discord":
      await discordCommand(twitchClient, channel);
      break;
    case "followage":
      await followageCommand(twitchClient, channel, userstate);
      break;
    case "accountage":
      await accountageCommand(twitchClient, channel, userstate);
      break;
    case "ban":
      await banCommand(twitchClient, channel, userstate, argument);
      break;
    case "timeout":
      await timeoutCommand(twitchClient, channel, userstate, argument);
      break;
    case "commands":
      await commandsCommand(twitchClient, channel, userstate, false);
      break;
    case "whispercommands":
      await commandsCommand(twitchClient, channel, userstate, true);
      break;
    case "updateproject":
      if (userstate.mod || userstate.badges.broadcaster) {
        await projectCommand.update(twitchClient, channel, argument);
      } else {
        twitchClient.say(
          channel,
          "You do not have permission to update the project."
        );
      }
      break;
    default:
      break;
  }
});

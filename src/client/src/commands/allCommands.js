const allCommands = {};

allCommands.accountage = {
  title: "!accountage",
  description: "Check the age of the account",
  usage: "!accountage <username>",
};

allCommands.ban = {
  title: "!ban",
  description: "Ban a user from the chat.",
};

allCommands.commands = {
  title: "!commands",
  description: "List all available commands",
};

allCommands.famous = {
  title: "!famous",
  description: "Check if you are famous",
};

allCommands.followage = {
  title: "!followage",
  description: "Check how long you have been following",
};

allCommands.lurk = {
  title: "!lurk",
  description: "Let the streamer know you are lurking",
};
allCommands.project = {
  title: "!project",
  description: "Check out the project",
};
allCommands.today = {
  title: "!today",
  description: "Check out the project",
};
allCommands.shoutout = {
  title: "!shoutout",
  description: "Give a shoutout to a user",
};

allCommands.playing = {
  title: "!playing",
  description: "Check what the streamer is playing",
  onExecute: () => {
    console.log("executing a custom playing command");
  },
  onLearnMore: () => {
    console.log("learning more about this particular playing function");
  },
};

allCommands.giveaway = {
  title: "!giveaway",
  description: "Start a giveaway",
};

allCommands.merch = {
  title: "!merch",
  description: "Check out the merch",
};

allCommands.poll = {
  title: "!poll",
  description: "Start a poll",
};

allCommands.weather = {
  title: "!weather",
  description: "Check the weather",
};
allCommands.uptime = {
  title: "!uptime",
  description: "Check the uptime of the stream",
};

allCommands.discord = {
  title: "!discord",
  description: "Join the discord server",
};

allCommands.specs = {
  title: "!specs",
  description: "Check the streamer's PC specs",
};

allCommands.eightBall = {
  title: "!8ball",
  description: "Ask the magic 8 ball a question",
};

allCommands.schedule = {
  title: "!schedule",
  description: "Check the stream schedule",
};

allCommands.socials = {
  title: "!socials",
  description: "Check the streamer's socials",
};

export default Object.values(allCommands);

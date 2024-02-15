# TwitchBot
This is a Twitch ChatBot that has a React and MUI/MaterialUI frontend, and NodeJS backend, with a MongoDB database. Once a Twitch ChatBot is established, this application gives numerous features and commands available to the streamer and their viewers. Through this TwitchBot, interaction between a streamer and their chat, along with people within chat is enhanced, being able to provide information on the stream along with numerous activities and 

## Features
- React and Material UI Frontend
- Points and Command Leaderboard
- Various Twitch commands (some of which remain in development)
    - 8ball, accountage, ban, commands, discord, donate, famousCommand, follwage, lurk, poll, project, quote, request, schedule, social, song, timeout, uptime, and weather

## Setup
1. Fork the repository
2. Clone the fork locally
3. Navigate to source folder of the repository
4. Install dependencies
```bash
npm install
```
5. [Create a twitch chatbot] https://dev.twitch.tv/docs/irc/get-started/
6. Create a .env file in the project root and add your Twitch bot credentials:
```bash
TWITCH_USERNAME=your_bot_username
TWITCH_PASSWORD=your_oauth_token
TWITCH_CHANNEL=channel_to_join
```



This application was made utilizing these fine projects:

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## Warning
[Under Construction] Please do not use this in production. There is no guarantee this will connect to Twitch Chat.
It will need significant work in order to be used with Twitch and or connect to it's services.


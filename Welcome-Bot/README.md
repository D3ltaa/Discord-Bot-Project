# Welcome Bot

## Description
Welcome Bot is a Discord bot designed to greet new members with a personalized welcome image. When a user joins your Discord server, the bot automatically generates a custom image featuring their username, avatar, and member count, then posts it in a specified channel. This enhances community engagement and provides a warm, visually appealing welcome experience.

## Installation

1. **Clone the repository:**
   ```powershell
   git clone <repository-url>
   ```
2. **Navigate to the bot directory:**
   ```powershell
   cd Discord-Bot-Project/Welcome-Bot
   ```
3. **Install dependencies:**
   ```powershell
   npm install
   ```
4. **Configure environment variables:**
   - Create a `.env` file in the `Welcome-Bot` directory.
   - Add your bot token and welcome channel ID:
     ```env
     BotToken=YOUR_DISCORD_BOT_TOKEN
     WelcomeChannel=YOUR_CHANNEL_ID
     ```

## Usage

1. **Start the bot:**
   ```powershell
   node index.js
   ```
2. **Invite the bot to your server.**
3. When a new member joins, the bot will send a custom welcome image in the configured channel.

## Features
- Automatically detects new members joining the server.
- Generates a custom welcome image with:
  - Username
  - Avatar
  - Member count
- Posts the image in a specified channel.
- Easy configuration via environment variables.

## Technologies
- [Node.js](https://nodejs.org/)
- [discord.js](https://discord.js.org/)
- [canvas](https://www.npmjs.com/package/canvas)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Open a pull request describing your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](../Welcome-Bot/LICENSE) file for details.

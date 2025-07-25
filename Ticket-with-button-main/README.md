
# Ticket Bot with Button for Discord

## Description
A Discord bot that allows users to create support tickets using interactive buttons. Staff can manage tickets, and users can easily open and close tickets in dedicated channels. The bot uses Discord.js v13+ and QuickDB for fast, persistent storage.

## Installation

1. **Clone the repository:**
   ```powershell
   git clone <repo-url>
   cd Discord-Bot-Project/Ticket-with-button-main
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   ```
3. **Configure environment variables:**
   - Copy the provided `.env` template or create a `.env` file in the project root:
     ```env
     TOKEN=your-bot-token-here
     STAFFTEAM=your-staff-team-role-id-here
     ```
   - Do not share your `.env` file publicly.

## Usage

- Start the bot:
  ```powershell
  node index.js
  ```
- In Discord, use the command:
  ```
  !ticket-setups #channel
  ```
  This sets up the ticket panel in the mentioned channel.
- Users click the "Create Ticket" button to open a ticket channel.
- Staff and the ticket owner can communicate in the ticket channel.
- Use the "Close" button to close the ticket.

## Features

- Ticket creation via button
- One active ticket per user
- Staff role access to tickets
- Easy ticket closing with confirmation
- Persistent ticket count and ownership tracking

## Technologies

- [Discord.js](https://discord.js.org/) (v13+)
- [QuickDB](https://quickdb.js.org/)
- Node.js

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

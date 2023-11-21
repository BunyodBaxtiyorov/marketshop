// // server.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const { Telegraf } = require("telegraf");

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(bodyParser.json());

// // Express server endpoint for handling registration
// app.post("/register", (req, res) => {
//   try {
//     const { phoneNumber } = req.body;

//     // Implement your logic to process the phone number and generate a response

//     res.status(200).json({ message: "Received phone number: " + phoneNumber });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // Telegraf bot setup
// const bot = new Telegraf("YOUR_TELEGRAM_BOT_TOKEN");

// bot.start((ctx) =>
//   ctx.reply("Welcome! Send me your phone number to register.")
// );
// bot.on("text", (ctx) => {
//   const phoneNumber = ctx.message.text;

//   // Implement your logic to process the received phone number

//   // Example: Send a confirmation message back to the user
//   ctx.reply(`Received your phone number: ${phoneNumber}`);
// });

// // Start the bot
// bot.launch();

// // Start the Express server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

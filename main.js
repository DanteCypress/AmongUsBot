require("dotenv").config();
const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("online");
});

client.login(process.env.API_KEY);

const { Client } = require("discord.js");
global.bot = new Client({ disableEveryone: true }); // for broken event system oof
const config = require("./assets/config");
const CommandManager = require("./command/index");
global.cmdMgr = new CommandManager();
const EventManager = require("./event/index");
const eventMgr = new EventManager();

cmdMgr.init();
eventMgr.init();

bot.login(config.token).catch((err) => {
	console.log("Cannot login to the Discord gateway");
});
const Event = require("../event");

class ReadyEvent extends Event {
	constructor(){
		super("ready");

		this.setCallback(() => { // Shit system atm
			console.log("Bot logged in as " + bot.user.tag);
			bot.user.setActivity("at Toolbox", { type: "WATCHING" });
		});
	}
}

module.exports = ReadyEvent;
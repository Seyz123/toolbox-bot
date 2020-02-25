const Command = require("../command");
const { Attachment } = require("discord.js"); 
const img = require("../../utils/image");

class TestCommand extends Command {
	constructor(){
		super("test", "");
	}

	async execute(msg, args){
		try {
			msg.reply("Nothing here :p");
		}
		catch(err){
			console.log(err);
			return;
		}
	}
}

module.exports = TestCommand;
const Command = require("../command");
const { Attachment } = require("discord.js"); 
const img = require("../../utils/image");

class TestCommand extends Command {
	constructor(){
		super("test", "");
	}

	async execute(msg, args){
		try {
			let gen = await img.createWelcome(msg.author);
			let buff = gen.toBuffer();
			let attach = new Attachment(buff, "welcome.png");
			msg.channel.send(attach);
		}
		catch(err){
			console.log(err);
			return;
		}
	}
}

module.exports = TestCommand;
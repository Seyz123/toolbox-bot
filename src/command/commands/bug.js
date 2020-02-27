const Command = require("../command");
const { RichEmbed } = require("discord.js"); 

class BugCommand extends Command {
	constructor(){
		super("bug", "Report a bug");
	}

	async execute(msg, args){
		try {
			let trunc = args.join(" ").split("|");

			if(!trunc[0] || !trunc[1]){
				msg.reply("wrong format!\nUse : `/bug Title|Description`");
				return;
			}

			let channel = msg.guild.channels.find(g => g.name === "bug-reports");

			if(channel){
				let e = new RichEmbed()
					.setTitle(trunc[0])
					.setDescription(trunc[1])
					.setColor("RED")
					.setFooter("Submitted by " + msg.author.username);

				channel.send(e);
				msg.channel.send("Bug report submitted!");
			}
		}
		catch(err){
			console.log(err);
			return;
		}
	}
}

module.exports = BugCommand;
const Event = require("../event");
const img = require("../../utils/image");
const { Attachment } = require("discord.js");

class WelcomeEvent extends Event {
	constructor(){
		super("guildMemberAdd");

		this.setCallback(async(member) => {
			try{
				let id = member.user.id;
				let channel = member.guild.channels.find(g => g.name === "newcomers");

				if(channel){
					let gen = await img.createWelcome(member.user);
					let buff = gen.toBuffer();
					let attach = new Attachment(buff, "welcome.png");

					channel.send("<@" + id + ">", attach);
				}
			}
			catch(err){
				console.log(err);
				return;
			}
		});
	}
}

module.exports = WelcomeEvent;
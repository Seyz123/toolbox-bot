const Command = require("../command");
const { RichEmbed } = require("discord.js"); 
const gpapi = require("google-play-scraper");

// I'll move that
const monthsTab = {
	0: "January",
	1: "February",
	2: "March",
	3: "April",
	4: "May",
	5: "June",
	6: "July",
	7: "August",
	8: "September",
	9: "October",
	10: "November",
	11: "December"
}
const daysTab = {
	0: "Monday",
	1: "Tuesday",
	2: "Wednesday",
	3: "Thursday",
	4: "Friday",
	5: "Saturday",
	6: "Sunday"
}

class TestCommand extends Command {
	constructor(){
		super("toolbox", "Get Toolbox's informations");
	}

	async execute(msg, args){
		try {
			let m = await msg.channel.send("<a:loading:681210647719182386> | Please wait...");
			let infos = await gpapi.app({ appId: "io.mrarm.mctoolbox" });
			let date = new Date(infos.updated);

			let e = new RichEmbed()
				.setTitle("Toolbox informations")
				// idk .setDescription("")
				.addField("Current Google Play version", infos.version)
				.addField("Updated", daysTab[date.getDay()] + ", " + monthsTab[date.getMonth()] + " " + date.getDate() + this.constructor.getDay(date.getDate()) + " " + date.getFullYear())
				.addField("What's news ?", infos.recentChanges.replace(/[*]/g, "-").replace(/<br>/g, "\n"))
				.addField("Min. Android version", infos.androidVersion)
				.addField("Download", "[Click here](" + infos.url + ")")
				.setColor("GREEN")
				.setFooter(bot.user.username);

			m.edit(e);
		}
		catch(err){
			return;
		}
	}

	static getDay(number){
		switch(number){
			case 1:
				return "st";
			break;

			case 2:
				return "nd";
			break;

			case 3:
				return "rd";
			break;

			default:
				return "th";
			break;
		}
	}
}

module.exports = TestCommand;
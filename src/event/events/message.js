const Event = require("../event");
const config = require("../../assets/config");

class MessageEvent extends Event {
	constructor(){
		super("message");

		this.setCallback((msg) => {
			let msgArr = msg.content.split(/\s/);
			let cmdwpref = msgArr.shift();
			let cmd = cmdwpref.slice(config.prefix.length).toLowerCase();
			let args = msgArr;

			if(msg.channel.type === "dm" || msg.author.bot || !msg.content.startsWith(config.prefix)){
				return;
			}

			if(cmdMgr.exists(cmd)){
				cmd = cmdMgr.get(cmd);
				cmd.execute(msg, args);
			}
		});
	}
}

module.exports = MessageEvent;
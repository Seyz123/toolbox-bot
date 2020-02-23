const Command = require("../command");

class TestCommand extends Command {
	constructor(){
		super("test", "A command for testing some stuff");
	}

	execute(msg, args){
		msg.reply("That's works");
	}
}

module.exports = TestCommand;
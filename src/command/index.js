const { readdirSync } = require("fs");
const { join } = require("path");

class CommandManager {
	constructor(){
		this.commands = new Map();
		//this.init();
	}

	init(){
		let files = readdirSync(join(__dirname, "commands"));

		if(files.length <= 0){
			return;
		}

		for(let file of files){
			let name = file.split(".").shift();
			let cmd = require("./commands/" + name);
			this.register(name, new cmd()); // hardcoded lmao
		}
	}

	exists(name){
		return this.commands.has(name);
	}

	get(name){
		return this.commands.get(name);
	}

	register(name, instance){
		this.commands.set(name, instance);
	}
}

module.exports = CommandManager;
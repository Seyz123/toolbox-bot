const { readdirSync } = require("fs");
const { join } = require("path");

class EventManager { // this might be a broken system oof
	constructor(){
		this.events = new Set();
	}

	init(){
		let files = readdirSync(join(__dirname, "events"));

		if(files.length <= 0){
			return;
		}

		for(let file of files){
			let name = file.split(".").shift();
			let event = require("./events/" + name);
			this.register(new event());
		}
	}

	register(instance){
		this.events.add(instance);
	}
}

module.exports = EventManager;
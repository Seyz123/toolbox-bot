class Command {
	constructor(name, description = null, admin = false) {
		this.name = name;
		this.description = description;
		this.admin = admin;
	}

	async execute(bot, msg, args){} // nothing to do here lmao

	getName(){
		return this.name;
	}

	getDescription(){
		return this.description;
	}

	isAdmin(){
		return this.admin;
	}
}

module.exports = Command;
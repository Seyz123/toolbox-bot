class Event {
	constructor(name) {
		this.name = name;
	}

	setCallback(cb){
		bot.on(this.getEventName(), cb); // wtf ??? xD
	}

	getEventName(){
		return this.name;
	}
}

module.exports = Event;
const { createCanvas, loadImage, registerFont } = require("canvas");
const { join } = require("path");
registerFont(join(__dirname, "..", "assets", "fonts", "Raleway-Bold.ttf"), { family: "BRaleway"});
registerFont(join(__dirname, "..", "assets", "fonts", "Raleway-Light.ttf"), { family: "LRaleway"});

class ImageUtils {
	static async createWelcome(user, text = "W E L C O M E"){
		let canvas = createCanvas(1200, 300);
		let ctx = canvas.getContext("2d");
		let name = user.username;

		let img = await loadImage(join(__dirname, "..", "assets", "imgs", "welcome.png"));
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

		ctx.font = "72px BRaleway";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";

		ctx.fillText(text, canvas.width / 2, canvas.height / 2.4);

		let aspect = 84;
		let y = canvas.height / 1.4;
		ctx.font = `${aspect}px LRaleway`;

		console.log(Math.floor((ctx.measureText(name).width / 2) + (canvas.width / 2)));

		while(Math.floor((ctx.measureText(name).width / 2) + (canvas.width / 2)) > 950){ // Text is centered so / 2 lol and canvas
			aspect--;
			y++;
			ctx.font = `${aspect}px LRaleway`;
		}

		ctx.fillText(name, canvas.width / 2, y);

		return canvas;
	}

	static drawRounded(ctx, img, x, y){
		// ToDo, maybe lol
	}
}

module.exports = ImageUtils;
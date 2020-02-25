const { createCanvas, loadImage } = require("canvas");
const { join } = require("path");

class ImageUtils {
	static async createWelcome(user, text = "Welcome"){
		let canvas = createCanvas(650, 250);
		let ctx = canvas.getContext("2d");
		let name = user.username;

		let img = await loadImage(join(__dirname, "..", "assets", "imgs", "welcome.png"));
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

		ctx.font = "60px Impact";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";

		ctx.fillText("Welcome", canvas.width / 2, 120);

		let aspect = 48;
		ctx.font = "48px Impact";

		while(ctx.measureText(name).width + 170 > 450 /* Not verified with Paint so I don't really know if that value is good or not lol*/){
			aspect--;
			ctx.font = `${aspect}px Impact`;
		}

		ctx.fillText(name, canvas.width / 2, 170);

		return canvas;
	}

	static drawRounded(ctx, img, x, y){
		// ToDo, maybe lol
	}
}

module.exports = ImageUtils;
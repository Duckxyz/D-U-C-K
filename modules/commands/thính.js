module.exports.config = {
	name: "thính",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Thính",
	commandCategory: "Boxchat",
	usages: "thính",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get(`http://le31.glitch.me/poem`);
const anh = await axios.get(`http://api.vangbanlanhat.tk/image?type=boy`);
var gai = anh.data.data.substring(anh.data.data.lastIndexOf(".") + 1);
var cadao = res.data.data
let callback = function () {
			 api.sendMessage({
				body: `❤️ Thả thính bay bay nè ❤️:\n﹤ ${cadao} ﹥`,
				attachment: fs.createReadStream(__dirname + `/cache/gaicadao.${gai}`)
			}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaicadao.${gai}`), event.messageID);
			};
			request(anh.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gaicadao.${gai}`)).on("close", callback);
}
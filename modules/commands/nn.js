const fs = require("fs");
module.exports.config = {
name: "nn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Duck",
description	:"ngủ ngon",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat ngủ ngon",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngủ ngon")==0 || (event.body.indexOf("Ngủ ngon")==0)) {
		var msg = {
				body: "Chúc bạn ngủ ngonnn❤ !",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ngủngon.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

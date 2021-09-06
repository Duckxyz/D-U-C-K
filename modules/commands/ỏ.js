const fs = require("fs");
module.exports.config = {
name: "ỏ",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Duck",
	description: "nhìn cc",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat ỏ",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
if (event.body.indexOf("Ỏ")==0|| (event.body.indexOf ("ỏ")==0)||(event.body.indexOf ("Ỏ")==0)){
		var msg = {
				body: "Hôm nay trời đẹp thế nhờ....❤",
				attachment: fs.createReadStream(__dirname + `/noprefix/ỏ.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

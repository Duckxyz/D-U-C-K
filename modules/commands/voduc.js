const fs = require("fs");
module.exports.config = {
name: "voduc",
	version: "1.0.1",
	hasPermssion: 0,
	
	description: "voduc",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần tự m mò đi :))",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("q.anh")==0 || (event.body.indexOf("vợ Đức")==0) || (event.body.indexOf ("vk Đức ") ==0)){
		var msg = {
				body: "Vợ Đức ❤💘😍💋",
				attachment: fs.createReadStream(__dirname + `/noprefix/vkduc.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

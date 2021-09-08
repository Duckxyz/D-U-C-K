module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người rời khỏi nhóm",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝑡𝑢̛̣ 𝑐𝑢́𝑡" : "𝑏𝑖̣ 𝑞𝑢𝑎̉𝑛 𝑡𝑟𝑖̣ 𝑣𝑖𝑒̂𝑛 đ𝑢𝑜̂̉𝑖";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `bye.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "𝐶𝑜𝑛 𝑣𝑜̛̣ {name} 𝑣𝑖̀ 𝑘ℎ𝑜̂𝑛𝑔 𝑡𝑎́𝑛 đ𝑜̂̉ 𝑒𝑚 𝑛𝑎̀𝑜 𝑛𝑒̂𝑛 đ𝑎̃ {type} 𝑘ℎ𝑜̉𝑖 𝑏𝑜𝑥.\n𝑉𝑖̃𝑛ℎ 𝑏𝑖𝑒̣̂𝑡 𝑒𝑚 𝑛ℎ𝑒́ 😿" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}

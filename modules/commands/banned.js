module.exports.config = {
	name: "banned",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Xem danh sách ban của nhóm hoặc của người dùng",
	commandCategory: "system",
	usages: "[thread/user]",
	cooldowns: 5
};

module.exports.run = async function ({ event, api, Users, args }) {
    const { threadID, messageID } = event;
    var listBanned = [], i = 1;

    switch (args[0]) {
        case "thread": {
            const threadBanned = global.data.threadBanned.keys();
            for (const singleThread of threadBanned) listBanned.push(`${i++}/ ${singleThread}`);
            return api.sendMessage(listBanned.length != 0 ? `Hiện tại đang có ${listBanned.length} nhóm bị ban\n${listBanned.join("\n")}` : "Hiện tại không có nhóm nào bị ban!", threadID, messageID);
        }

        case "user": {
            const userBanned = global.data.userBanned.keys();
            for (const singleUser of userBanned) {
                const name = global.data.userName.get(singleUser) || await Users.getNameUser(singleUser);
                listBanned.push(`${i++}/ ${name}(${singleUser})`);
            }
            return api.sendMessage(listBanned.length != 0 ? `Hiện tại đang có ${listBanned.length} người dùng bị ban\n${listBanned.join("\n")}` : "Hiện tại không có người dùng bị ban", threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    
    }
}
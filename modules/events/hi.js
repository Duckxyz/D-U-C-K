module.exports.config = {
    name: "hi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kanichi",
    description: "",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/joinGif/`;
    if (!fs.existsSync(dirMaterial + "joinGif")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "duck.gif")) request("https://cdn.fbsbx.com/v/t59.2708-21/51813521_393266204840352_520122717094019072_n.gif?_nc_cat=105&ccb=1-5&_nc_sid=041f46&_nc_ohc=IO0IzyerOPoAX_lKTLY&_nc_oc=AQl_5YEEQkixPIBxatZMToGikAu3L_R8pnsfLFrrIHuozrwy9EZSoEVuakn9webY_eU&_nc_ht=cdn.fbsbx.com&oh=9898da31d5e2c95141efb10b940ab8a4&oe=61387E93").pipe(fs.createWriteStream(dirMaterial + "duck.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let dt = await api.getUserInfo(event.senderID);
    let name = dt[event.senderID].name;
    var msg = {
    body: `Chào ${name}, chúc bạn một ngày mới tốt lành ❤️`,
    attachment: fs.createReadStream(__dirname + `/noprefix/duck.gif`)
   }
    if (event.body.toLowerCase() == "hi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hello"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chào"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hí"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "lô"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
 }

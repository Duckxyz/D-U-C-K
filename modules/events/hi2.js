module.exports.config = {
    name: "hi2",
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
    const dirMaterial = __dirname + `/cache/LeaveGif/`;
    if (!fs.existsSync(dirMaterial + "LeaveGif")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bye.gif")) ("https://video.xx.fbcdn.net/v/t42.3356-2/235374578_4434253243300426_3978218776643029766_n.mp4/video-1631000741.mp4?_nc_cat=108&ccb=1-5&_nc_sid=060d78&_nc_ohc=c4dmiKAWrEgAX-p9mRk&vabr=201120&_nc_ht=video.xx&oh=0bd3b913e7a282a1abaabc28a62c14d5&oe=6138492F&dl=1").pipe(fs.createWriteStream(dirMaterial + "bye.gif"));
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

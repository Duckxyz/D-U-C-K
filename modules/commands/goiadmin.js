module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100072124132023") {
    var aid = ["100030751998443"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Muốn nói chuyện với admin à 😼 dùng callad đi","Kêu gì admin đấy 😾 ","Đã bảo đừng tag Admin mà, thích ăn đấm hả😠","Đĩ mẹ mày thích tag Admin không con chó 😏"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }

let handler = function (m) {
	this.sendContact(m.chat, '6288289338073', 'Owner 赤 SHINN - BOT :)', m)
}

handler.customPrefix = ['🍭Owner 赤 SHINN - BOT'] 
handler.command = new RegExp

module.exports = handler
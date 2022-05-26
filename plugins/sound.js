let fetch = require("node-fetch")
async function handler(m, {command}) {
m.reply('_Loading..._')
let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
}

handler.help = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6', 'sound7', 'sound8', 'sound9', 'sound10', 'sound11', 'sound12', 'sound13', 'sound14', 'sound15', 'sound16', 'sound17', 'sound18', 'sound19', 'sound20', 'sound21', 'sound22', 'sound23', 'sound24', 'sound25', 'sound26', 'sound27', 'sound28', 'sound29', 'sound30', 'sound31', 'sound32', 'sound33', 'sound34', 'sound35', 'sound36', 'sound37', 'sound38', 'sound39', 'sound40', 'sound41', 'sound42', 'sound43', 'sound44', 'sound45', 'sound46', 'sound47', 'sound48', 'sound49', 'sound50', 'sound51', 'sound52', 'sound53', 'sound54', 'sound55', 'sound56', 'sound57', 'sound58', 'sound59', 'sound60', 'sound61', 'sound62', 'sound63', 'sound64', 'sound65', 'sound66', 'sound67', 'sound68', 'sound69', 'sound70', 'sound71', 'sound72', 'sound73', 'sound74']
handler.tags = ['sound']

handler.command = /^(sound1|sound2|sound3|sound4|sound5|sound6|sound7|sound8|sound9|sound10|sound11|sound12|sound13|sound14|sound15|sound16|sound17|sound18|sound19|sound20|sound21|sound22|sound23|sound24|sound25|sound26|sound27|sound28|sound29|sound30|sound31|sound32|sound33|sound34|sound35|sound36|sound37|sound38|sound39|sound40|sound41|sound42|sound43|sound44|sound45|sound46|sound47|sound48|sound49|sound50|sound51|sound52|sound53|sound54|sound55|sound56|sound57|sound58|sound59|sound60|sound61|sound62|sound63|sound64|sound65|sound66|sound67|sound68|sound69|sound70|sound71|sound72|sound73|sound74)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 2

handler.admin = false
handler.botAdmin = false

handler.fail = null
module.exports = handler

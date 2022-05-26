let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/awokawok.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*WKWKWKWK*', 'status@broadcast')
}

handler.customPrefix = /^(wkwkwk|awokawok|awikawok|wokwokwok|awikwok|awowkwowk|awokawok|HAHA|wk|wkwk)$/i
handler.command = new RegExp

module.exports = handler
let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/furry.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Oke Bang*', 'status@broadcast')
}

handler.customPrefix = /^(ok|iya|sip|yoi|Ok|Iya|Sip)$/i
handler.command = new RegExp

module.exports = handler

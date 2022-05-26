let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Hallohaori.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*✧───────···────────✧*\n*Hallo Juga Kak Shinn Kangen Nih* \n *Gimana Kabar Nya? >~<*', 'status@broadcast')
}

handler.customPrefix = /^(Hallo Shinn|Hallo shinn|hi shinn|Hi Shinn)$/i
handler.command = new RegExp

module.exports = handler

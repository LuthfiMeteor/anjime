let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
ʚ───═[ 𝗚𝗥𝗨𝗣 𝗕𝗢𝗧 ]═───ɞ

https://chat.whatsapp.com/GDSdQlUvcvj4tti6fROPHR

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Shinn Groups')).buffer(), ext, '🎮 ꜱʜɪɴɴ 𝚋𝚘𝚝𝚣 𝙸𝚜 𝚃𝚑𝚎 𝙱𝚎𝚜𝚝', 'Siap Shinn', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot1']
handler.tags = ['main']
handler.command = /^(gcbot1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
ʚ───═[ 𝗚𝗥𝗨𝗣 𝗕𝗢𝗧 ]═───ɞ

https://chat.whatsapp.com/FNDWauX031OI6I3u7QjrHO

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'OtakuDesu Groups')).buffer(), ext, '🎮 ꜱʜɪɴɴ𝚋𝚘𝚝𝚣 𝙸𝚜 𝚃𝚑𝚎 𝙱𝚎𝚜𝚝', 'Siap Shinn', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot2']
handler.tags = ['main']
handler.command = /^(gcbot2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

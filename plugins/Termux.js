let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
✧─────···───────✧

Nih Bang Link Termux Nya

https://f-droid.org/en/packages/com.termux/

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Termux')).buffer(), ext, '🎮 ꜱʜɪɴɴ𝚋𝚘𝚝𝚣 𝙸𝚜 𝚃𝚑𝚎 𝙱𝚎𝚜𝚝', 'Thx Shinn 💌', 'Iya', 'Scrip 🔭', '.sc', m)

}
handler.help = ['termux']
handler.tags = ['main']
handler.command = /^(termux)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

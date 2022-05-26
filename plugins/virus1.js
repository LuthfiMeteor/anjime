let axios = require("axios");
let handler = async (m, { conn, command }) => {


   await m.reply('Searching...')
  axios.get(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/virus/virtex1.json`).then ((res) => {

let hasil = `
*JANGAN LUPA SUBSCRIBEx*

${res.data}
`.trim()

    conn.reply(m.chat, hasil, m)
  })
}
handler.help = ['virtex1']
handler.tags = ['owner']
handler.command = /^(virtex1)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

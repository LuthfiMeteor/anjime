let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Update Terakhir')).buffer(), `
Catatan Perubahan :
`.trim(), 'Senin, 16 Mei 2022 : V. 4.05\n\n◇ Penambahan Fitur : Catatan Perubahan\n\n◇ Update Tampilan\n\n◇ Perbaiki Berapa Bug Seperti Wm Stiker, Untuk Gif Masih Emrror \n\n◇ Total Fitur saat ini: 613\n\n© AxellXyz', 'Ok Shinn :3', 'Ok')
handler.help = ['note']
handler.tags = ['info']
handler.command = /^(catatanperubahan|perubahan|notes)$/i

module.exports = handler
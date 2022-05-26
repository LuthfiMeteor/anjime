let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/bot.webp')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
  }
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', `*ShinnBot Di Sini Kamu Kangen?*\nUptime : ${clockString(process.uptime() * 1000)}\nBattery : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? 'Pengisian Daya' : 'ShinnBOT🥀🔥'}` : 'tidak diketahui'}`)
}
handler.customPrefix = /^(bot|ShinnBotz|Shinn|ayg|syg|ayang|sayang|yang|By|Beb|Ayy|ay|Syng|Byy)$/i
handler.command = new RegExp

module.exports = handler
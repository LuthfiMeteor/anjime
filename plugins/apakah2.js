let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin','Halu Lu Bego','Gamungkin Dek','Mana mungkin','Ga mungkin terjadi','Gausah halu dek','Yo Nda Tau Kok Tanya Saya','Tanya Bapak Jangan Tanya Saya','Mana Saya Tau','Iya Kali Begitu','Mungkin Saja','Gamau Jawab Kamu Bau','Gausah Nanya" Shinn Lagi Cape','Tanya Sama Yang Lain','Ku Kira Tidak','Kira Kira Begitu','Seperti Itu Mungkin'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['apakah <pertanyaan>']
handler.tags = ['kerang']
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}


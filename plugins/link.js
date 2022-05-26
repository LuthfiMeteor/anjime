let handler = async (m, { conn }) => {
    conn.reply(m.chat, `────〔 𝗟𝗜𝗡𝗞 𝗚𝗥𝗢𝗨𝗣 〕────\n────〔 Jᴀɴɢᴀɴ Lᴜᴘᴀ Dɪ Sʜᴀʀᴇ\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat), m)
  }
  handler.help = ['linkgroup']
  handler.tags = ['group']
  handler.command = /^link(g(c)?ro?up)?$/i
  
  handler.group = true
  handler.botAdmin = true
  
  module.exports = handler

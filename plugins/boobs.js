let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await Neko.nsfw.boobs()).url
   conn.sendButtonImg(m.chat, json, 'Wangy wangy wangy', global.wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['boobs','oppai', 'milf']
handler.tags = ['hentai', 'premium']
handler.command = /^(boobs|oppai|milf)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.limit = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
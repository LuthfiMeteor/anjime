let fs = require('fs')
let handler = async function (m) {
	const fakegrup = {
	key : {
fromMe: false,
participant : '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
locationMessage: {
name: 'Ini Kak Owner Shinn OωO',
jpegThumbnail: fs.readFileSync('./src/haori.jpg')
  }
 }
}
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel: Axell - Tata Luvv ^ω^\nEND:VCARD`
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: fakegrup })
          let buttons = [
  {buttonId: '.donasi', buttonText: {displayText: '💌 Donasi'}, type: 1},
  {buttonId: '.menu', buttonText: {displayText: '🧾 Menu'}, type: 1},
]
const buttonsMessage = {
    contentText: `
Itu Owner Ku Kak >ω<
*Yang Cewe Jangan Genit Yah><*
`.trim(),    footerText: ``,
    buttons: buttons,
  headerType: 'EMPTY'
}
conn.sendMessage(m.chat, buttonsMessage, 'buttonsMessage', { quoted: test})
}
handler.help = ['owner', 'creator']
handler.tags = ['info', 'main']

handler.command = /^(owner)$/i

module.exports = handler

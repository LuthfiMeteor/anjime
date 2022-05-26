const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "AxellXyz",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:AxellXyz\nitem1.TEL;waid=6288289338073:6288289338073\nitem1.X-ABLabel:📍 Creator ShinnBOT\nitem2.EMAIL;type=INTERNET:axellxyzz@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3kXpKwL/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | DKI JAKARTA\nitem5.X-ABLabel:──────[ AxellXyz ]──────\nEND:VCARD"
  }, {
    "displayName": "TataXyz",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:TataXyz\nitem1.TEL;waid=6282157312489:6282157312489\nitem1.X-ABLabel:📍 Couple AxellXyz\nitem2.EMAIL;type=INTERNET:axellxyzz@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3kXpKwL/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | KALIMANTAN\nitem5.X-ABLabel:────[ TataXyz ]────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

module.exports = handler

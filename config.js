// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to kannachann
// thank you to ALL Bot creator
// and thanks you to who support my Bot
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})

gc1 = 'https://chat.whatsapp.com/GDSdQlUvcvj4tti6fROPHR'
gc2 = 'https://chat.whatsapp.com/FNDWauX031OI6I3u7QjrHO'
gc3 = 'https://chat.whatsapp.com/E1befxNQq4jGsPKmpaBmnv'

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/*function image() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = fs.readFileSync('./src/logo3.jpg')
    if (time >= 4) {
        res = fs.readFileSync('./src/logo3.jpg')
    }
    if (time > 10) {
        res = fs.readFileSync('./src/logo3.jpg')
    }
    if (time >= 15) {
        res = fs.readFileSync('./src/logo2.jpg')
    }
    if (time >= 18) {
        res = fs.readFileSync('./src/logo2.jpg')
    }
    return res
}*/

global.DeveloperMode = 'false' //Buat Mode True False Moderator
global.linkGC = ['https://chat.whatsapp.com/GDSdQlUvcvj4tti6fROPHR'] // ganti jadi group lu
global.owner = ['6288289338073','6282157312489'] // Ganti jadi nomor lu ajg nanti ngechat bot lu pas sv database
global.mods = ['6288289338073'] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'cristian9407',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'amel',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'SHINN - BOT'
global.author = '۰ \n\n\n\n'

// silakan di ganti klo mau
global.botwm = `SHINN - BOT 🧋`//UBAH JADI NAMAMU
global.botdate = `❏ ${time}\n❏ ${week} ${date}\n`
global.imagebot = `https://camo.githubusercontent.com/731b10bfd3953a64e30cda4bbca274829a645755b034dabbe38be45a0d3174f2/68747470733a2f2f777777362e666c616d696e67746578742e636f6d2f6e65742d66752f70726f78795f666f726d2e6367693f26696d6167656f75747075743d74727565267363726970743d736b657463682d6e616d6526646f5363616c653d74727565267363616c6557696474683d353030267363616c654865696768743d35303026666f6e7473697a653d3130302666696c6c54657874547970653d312666696c6c546578745061747465726e3d5761726e696e6726746578743d4f6e65253230426f747a`
global.logo = fs.readFileSync('./src/logo3.jpg')
global.logoowner = fs.readFileSync('./src/owner.jpg')
global.wait = '*[ ! ] Memproses...*'
global.rpg = '[ ! ] Fitur Rpg Dimatikan\nKetik *#enable* *rpg* untuk menggunakan fitur ini'
global.nsfw = '[ ! ] Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '```404 error```'
global.pref = '( # . ! /)'
global.CanvasAPI = '';
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 16 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

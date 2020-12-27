exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `| -----[ *MENU ${BotName}* ]----- |
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Selamat datang di info pada bot ini!

Tanggal : *${tampilTanggal}*
Jam : *${tampilWaktu}*

♻ INFO BOT! :
   
⚜ *BOT : V1.1
⚜ *DESIGNER*: Sensi BOT
⚜ *YOUTUBE*: sensi Chanel

📺 *Iklan* :

✅ Follow akun instagram Presiden @sensi.edtz_

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *085964224017*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️
⚠️ Jika Ingin Memberi Donasi Silahkan WA : 085964224017

Grup Bot  [1] : -

Grup Bot  [2] : -

  
| -----[ *POWERED BY ${BotName}* ]----- |`
}
